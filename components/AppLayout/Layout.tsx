import styles from './Layout.module.css'
import React from 'react'
import Head from 'next/head'
import Navbar from '../AppNav/Nav'
import LayoutProps from '../../interface/LayoutProps'


export default function Layout  ({ children, title = 'The Movie Bulletin' }: LayoutProps) {

  return (
    <html>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.container}>
        <header>
        <Navbar />
        </header>
        {children}
      </main>
    </html>
  )
}