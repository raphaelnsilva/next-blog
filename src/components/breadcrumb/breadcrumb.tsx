'use client'

import React, { ReactNode } from 'react'
import styles from './breadcrumb.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
  homeElement: ReactNode
  separator: ReactNode
  capitalizeLinks?: boolean
}

const Breadcrumb = ({
  homeElement,
  separator,
  capitalizeLinks
}: TBreadCrumbProps) => {
  const paths = usePathname().toUpperCase()
  const pathNames = paths.split('/').filter((path) => path)
  const pathNamesReplaced = pathNames.map((path) => path.replace(/-/g, ' '))

  return (
    <div className={styles.container}>
      {paths === '/' ? (
        ''
      ) : (
        <ul className={styles.containerClasses}>
          <li className={styles.listClasses}>
            <Link href={'/'}>{homeElement}</Link>
          </li>
          {pathNamesReplaced.length > 0 && separator}
          {pathNamesReplaced.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`
            const itemClasses =
              paths === href
                ? `${styles.listClasses} ${styles.activeClasses}`
                : `${styles.listClasses}`
            const itemLink = capitalizeLinks
              ? link[0].toUpperCase() + link.slice(1, link.length)
              : link
            return (
              <React.Fragment key={index}>
                <li className={itemClasses}>
                  <Link href={href}>{itemLink}</Link>
                </li>
                {pathNamesReplaced.length !== index + 1 && separator}
              </React.Fragment>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Breadcrumb
