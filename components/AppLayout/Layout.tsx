import styles from './Layout.module.css'
import React from 'react'
import Head from 'next/head'
import Navbar from '../AppNav/Nav'
import LayoutProps from '../../interface/LayoutProps'
import Footer from '../AppFooter/Footer'


export default function Layout({ children }: LayoutProps) {

  return (
    <>
      <Head>
        <title>The Movie Bulletin</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles.container}>
        {children}
      </main>
        <Footer />
    </>

  )
}