import { fullyear } from '@/utils/constants'
import React from 'react'
import Styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={Styles.container}>
      <p>© {fullyear()} DeKodes. All rights reserved</p>
      <div>
        <div className={Styles.socials}>
          <Image src="/1.png" width={15} height={15} className={Styles.icon} alt="DevKode" />
          <Image src="/2.png" width={15} height={15} className={Styles.icon} alt="DevKode" />
          <Image src="/3.png" width={15} height={15} className={Styles.icon} alt="DevKode" />
          <Image src="/4.png" width={15} height={15} className={Styles.icon} alt="DevKode" />
        </div>
      </div>
    </div>
  )
}

export default Footer