'use client'
import React, { useRef } from 'react'
import styles from './contact.module.css'
import Image from 'next/image'

const Contact = () => {
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const messageInputRef = useRef(null)
  const handleSubmit = () => {
    console.log('Input value:', nameInputRef);
    console.log('Input value:', emailInputRef);
    console.log('Input value:', messageInputRef);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="contact" fill={true} className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} ref={nameInputRef} />
          <input type="text" placeholder='email' className={styles.input} ref={emailInputRef} />
          <textarea placeholder="message" cols={30} rows={10} className={styles.textArea} ref={messageInputRef}></textarea>
          <button type='submit' className={styles.contactBtn} onClick={handleSubmit}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact