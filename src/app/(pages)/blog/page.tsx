import React from 'react'
import styles from './blog.module.css'
import ButtonLink from '@/components/Button/button'
import Image from 'next/image'
import Link from 'next/link';

interface IPostItem {
  _id: number, title: string, desc: string, content:string, image:string, username:string
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log(res)
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((post: IPostItem) => (
        <Link key={post._id} href={`blog/${post._id}`} className={styles.container}>
            <div className={styles.imageContainer}>
              <Image width={400} height={250} className={styles.image} src={post.image} alt=""/>
            </div>
            <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog