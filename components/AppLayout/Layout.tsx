import styles from './Layout.module.css'
import React from 'react'
import Navbar from '../AppNav/Nav'
import LayoutProps from '../../interface/LayoutProps'
import Footer from '../AppFooter/Footer'


export default function Layout({ children }: LayoutProps) {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.mainContainer}>
        {children}
      </main>
      <Footer />
    </>
  )
}