import Image from 'next/image'
import styles from './home.module.css'
import HeroImage from 'public/hero.png'
import ButtonLink from '@/components/Button/button'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.heroHeader}>Better design for your digital products.</h1>
        <p className={styles.heroDes}>Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>
        <ButtonLink text={'See Our Works'} url={'/portfolio'} />
      </div>
      <div className={styles.innerContainer}>
        <Image src={HeroImage} alt="hero" className={styles.img} />
      </div>
    </div>
  )
}
