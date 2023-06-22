'use client'
import React, { useEffect, useReducer, useState } from 'react'
import styles from './dashboard.module.css'
import { IClearErrorAction, IDashboardState, ISetDashboardDataAction, ISetErrorAction, ISetLoadingAction } from '@/utils/interface'
import useSWR from 'swr'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'



// const initailState:IDashboardState = {
//   data:{},
//   isLoading:false,
//   showError:false,
//   errorMessage:''
// }

// type Action = ISetDashboardDataAction | ISetLoadingAction | ISetErrorAction | IClearErrorAction

// const reducer = (state:IDashboardState, action:Action) => {
//   switch (action.type) {
//     case 'SET_DATA':
//       return { ...state, data: action.payload };
//     case 'SET_LOADING':
//       return { ...state, isLoading: action.payload };
//     case 'SET_ERROR':
//       return { ...state, showError: true, errorMessage: action.payload };
//     case 'CLEAR_ERROR':
//       return { ...state, showError: false, errorMessage: '' };
//     default:
//       return state;
//   }
// }


const Dashboard = () => {

  const session = useSession()

  console.log(session)
  const router = useRouter()
  const [err, setErr] = useState<string | any>()
  const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `http://localhost:3000/api/posts?username=${session?.data?.user}`, fetcher)
  
  console.log(data)


  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('auth/login')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const title = (e.currentTarget.elements[0] as HTMLInputElement).value
      const desc = (e.currentTarget.elements[1] as HTMLInputElement).value
      const img = (e.currentTarget.elements[2] as HTMLInputElement).value
      const content = (e.currentTarget.elements[3] as HTMLInputElement).value

    try {
        if (!session?.data?.user?.email) {
          throw new Error("User is not authenticated"); // Or handle this situation however you want
        }

        await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-type": 'application/json'
          },
          body: JSON.stringify({
            title,
            desc,
            img,
            content,
            username: session?.data?.user.email,
          })
        });
        mutate()
      } catch (error) {
        setErr(error)
      }
    }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post:any) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image src={post.image} alt="" width={200} height={100} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  // onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols={30}
            rows={10}
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
}

export default Dashboard