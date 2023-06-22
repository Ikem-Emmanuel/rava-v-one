"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }: any) => {
  const session = useSession()
  const [err, setErr] = useState<string | any>()
  const router = useRouter()
  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard')
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value

    signIn("credentials", {email, password})
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required 
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {/* {error && error} */}
      </form> 
      <button
        onClick={() => signIn('google')}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/auth/register">
        Create new account
      </Link>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default Login;