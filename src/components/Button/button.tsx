import React, { FC } from 'react'
import Styles from './button.module.css'
import { IButtonLink } from '@/utils/interface'
import Link from 'next/link'

const ButtonLink = ({text, url}:IButtonLink) => {
    return (
        <Link href={url}>
            <button className={Styles.container}>{ text}</button>
        </Link>
  )
}

export default ButtonLink