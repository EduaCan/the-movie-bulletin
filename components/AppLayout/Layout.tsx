import styles from './Layout.module.css'
import React from 'react'
import Head from 'next/head'
import Navbar from '../AppNav/Nav'
import LayoutProps from '../../interface/LayoutProps'


export default function Layout  ({ children }: LayoutProps) {

  return (
    <html>
      <Head>
        <title>The Movie Bulletin</title>
      </Head>
        <header className={styles.test}>
        <Navbar />
        </header>
      <main className={styles.container}>
        {children}
      </main>
    </html>
  )
}