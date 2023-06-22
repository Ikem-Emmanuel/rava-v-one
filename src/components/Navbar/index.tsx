'use client'
import { IMenuItem } from '@/utils/interface';
import Link from 'next/link';
import React from 'react'
import Styles from './navbar.module.css'
import ThemeToggle from '../ThemeToggle';
import { signOut, useSession } from 'next-auth/react';

const links:IMenuItem[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 7,
    title: "Login",
    url: "/auth/login",
  },
];

const Header = () => {
  const session = useSession()  
  return (
    <div className={Styles.container}>
      <Link href="/" className={Styles.logo}>DevKodes</Link>
      <div className={Styles.menu}>
        <ThemeToggle />
        {links.map((link: IMenuItem) => (
          <Link key={link.id} href={link.url} className={Styles.menuItem}>{link.title}</Link>
        ))}
        {session.status === 'authenticated' && <button className={Styles.logoutBtn} onClick={()=>signOut()}>LogOut</button> }
      </div>
    </div>
  )
}

export default Header