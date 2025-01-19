import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import React from 'react'

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    <Navbar/>
    <main className='bg-light-primary'>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default layout