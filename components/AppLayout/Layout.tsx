
import React from 'react'
import Head from 'next/head'
import Navbar from '../AppNav/Nav'
import LayoutProps from '../../interface/LayoutProps'
import Footer from '../AppFooter/Footer'


export default function Layout ({ children, title = 'The Movie Bulletin' }: LayoutProps) {

  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}