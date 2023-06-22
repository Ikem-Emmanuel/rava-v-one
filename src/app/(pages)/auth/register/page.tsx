"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState<string | any>()
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value
    const password = (e.currentTarget.elements[2] as HTMLInputElement).value

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
      res.status === 200 && router.push('/auth/login?msg=Account Createdd Successfully')
    } catch (error) {
      setErr(error)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
          autoComplete='off'
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
          autoComplete='off'
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
          autoComplete='off'
        />
        <button className={styles.button}>Register</button>
        {/* {error && "Something went wrong!"} */}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/auth/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;