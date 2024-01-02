'use client'
import { useState } from 'react'
import styles from './contact.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState([])
  const [success, setSuccess] = useState(false)

  const clearMessages = () => {
    setError([])
    setSuccess(false)
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const res = await fetch('api/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })

    const { msg, success } = await res.json()
    setError(msg)
    setSuccess(success)
    if (success) {
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(clearMessages, 5000)
    } else {
      setTimeout(clearMessages, 5000)
    }
  }

  return (
    <section className={styles.sectionContainer}>
      <h1>Entre em contato com a gente.</h1>
      <form className={styles.myForm} onSubmit={handleSubmit}>
        <div className={styles.myInput}>
          <label htmlFor='name'>Nome:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            value={name}
            placeholder='Digite seu nome...'
            autoComplete='off'
            id='name'
          />
        </div>
        <div className={styles.myInput}>
          <label htmlFor='email'>Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='exemplo@gmal.com'
            autoComplete='off'
            id='email'
          />
        </div>
        <div className={styles.myInput}>
          <label htmlFor='message'>Mensagem:</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            rows={4}
            placeholder='Escreva sua mensagem aqui...'
            name='message'
          />
        </div>
        <button className={styles.myBtn} type='submit'>
          Enviar Mensagem
        </button>
      </form>
      {error &&
        error.map((e) => (
          <div
            key={e}
            className={`${
              success ? `${styles.successMessage}` : `${styles.errorMessage}`
            }`}
          >
            {e}
          </div>
        ))}
    </section>
  )
}
