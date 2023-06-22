import React from 'react'
import styles from './portfolio.module.css'
import Link from 'next/link'
import { IMenuItem } from '@/utils/interface'

const works:IMenuItem[] = [
  {
    id:1,
    title:'Frontend Development',
    url:'/portfolio/frontend'
  },
  {
    id:2,
    title:'Mobile Development',
    url:'/portfolio/mobile'
  },
  {
    id:3,
    title:'UI/UX Development',
    url:'/portfolio/uiux'
  },
  {
    id:4,
    title:'Content Writing',
    url:'/portfolio/contentwriting'
  },
]

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.wrapper}>
        {
          works.map((work: IMenuItem) => (
            <Link key={work.id} href={work.url} className={styles.card}>
              <span className={styles.cardTitle}>{work.title}</span>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio