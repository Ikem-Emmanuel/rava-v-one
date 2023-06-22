import React from 'react'
import styles from './category.module.css'
import ButtonLink from '@/components/Button/button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'
import { IPortfoilioObj, IPortfolioItem } from '@/utils/interface'

type ItemKey = keyof IPortfolioItem;


const getData = (cat:ItemKey) => {
  const data = items[cat]
  if (data) {
    return data
  }
  return notFound()

}


const PortfolioCat = ({ params }: any) => {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category.toUpperCase()}</h1>
      {data.map((cat: IPortfoilioObj) => (
        <div key={cat.id} className={styles.wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>{cat.title}</h1>
            <p className={styles.desc}>{cat.desc}</p>
            <ButtonLink text={'See More'} url={'/#'} />
          </div>
          <div className={styles.imageContainer}>
            <Image fill={true} className={styles.img} src={cat.image} alt=""/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioCat