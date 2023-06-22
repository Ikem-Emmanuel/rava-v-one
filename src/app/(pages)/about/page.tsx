import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import ButtonLink from '@/components/Button/button'

export const metadata = {
  title: 'About | DevKodes',
  description: 'This is the About Pages',
}

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' fill={true} alt='aboutImage' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTextTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgTextDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.dsc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.imgTextDesc}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <ButtonLink text={'Contact Us'} url={'/contact'} />
        </div>
      </div>
    </div>
  )
}

export default About