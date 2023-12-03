const dedupedFetch = async (serializedInit) => {
  const response = await fetch(
    'https://graphql.datocms.com/',
    JSON.parse(serializedInit)
  )
  const responseBody = await response.json()
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    )
  }
  return responseBody
}
export async function performRequest({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate
}) {
  const body = {
    query,
    variables,
    revalidate
  }

  const { data } = await dedupedFetch(
    JSON.stringify({
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.FULL_ACCESS_API_TOKEN}`,
        ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
        ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
        ...(visualEditingBaseUrl
          ? {
              'X-Visual-Editing': 'vercel-v1',
              'X-Base-Editing-Url': visualEditingBaseUrl
            }
          : {}),
        ...(process.env.NEXT_DATOCMS_ENVIRONMENT
          ? { 'X-Environment': process.env.FULL_ACCESS_API_TOKEN }
          : {})
      },
      body: JSON.stringify(body),
      next: { revalidate }
    })
  )

  return data
}
