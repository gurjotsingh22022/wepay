import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import HeroImg from '../public/images/WePay-Dashboard.png'
import TransferImg from '../public/images/WePay-FundTransfer-2.png'

const Hero = () => {
  return (
    <>
    <section className="hero-area relative py-10 md:py-20 lg:py-28 z-20">
      <div className="ms-auto max-w-7xl ps-6 2xl:px-0">
        <div className="grid grid-cols-1 items-start justify-between gap-5 lg:grid-cols-2">
          <div className="w-full lg:col-span-1">
            <div className="mt-5">
              <h1 className="mt-3 max-w-xl text-heading-6 !font-bold text-metal-900 md:text-heading-3 dark:text-white">
                <span className="block">Pay, Send and Save</span>
                <span className="block">Money With WePay</span>
                <span className="hero-text block">Canada</span>
              </h1>
              <p className="mb-7 mt-2 w-full text-body-4 font-normal text-metal-600 md:max-w-[500px] lg:max-w-[526px] lg:text-body-3 dark:text-metal-300">
              Easily and securely spend, send, and manage your transactions—all in one place. Sign up for free online.
              </p>
              <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-5">
                <div className="inline-flex w-[270px] items-center justify-between divide-x-2 divide-metal-100 rounded-lg border border-metal-200 bg-white px-3.5 py-3 dark:border-metal-600 dark:bg-metal-900">
                  <input className="text-body-4 font-normal outline-none text-metal-600 dark:text-white" placeholder='Email Adress'/>
                  {/* <button className="pl-2" onClick={() => copyToClipboard('npm install keep-react')}>
                    {copy ? <Check size={18} color="#8897AE" /> : <Clipboard size={18} color="#8897AE" />}
                  </button> */}
                </div>
                <Link
                  href="/sign-up"
                  className={`${buttonVariants({ size: 'lg'})} bg-slate-900 text-white`}>
                  Start Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:col-span-1 relative">
            <div className='w-full relative lg:absolute right-0 top-0 z-30'>
            <Image src={HeroImg} width={100} height={100} alt="hero" className="h-full w-full rounded-l-3xl shadow-xl aspect-square object-cover object-left" unoptimized />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero-area relative mt-0 lg:mt-16 py-10 md:py-20 lg:pb-24 lg:pt-36 z-10" id='sendmoney'>
      <div className="me-auto max-w-7xl pe-6 2xl:px-0">
        <div className="flex lg:grid grid-cols-1 flex-col-reverse lg:flex-col items-center justify-between gap-10 lg:grid-cols-2">
          
          <div className="w-full h-full lg:col-span-1 relative">
            <div className='w-full relative lg:absolute right-0 top-0 z-10'>
            <Image src={TransferImg} width={100} height={100} alt="hero" className="h-full w-full rounded-r-3xl shadow-xl" unoptimized />
            </div>
          </div>
          <div className="w-full ps-6 lg:ps-0 lg:col-span-1">
            <div className="mt-10">
              <h1 className="mt-3 max-w-xl text-heading-6 !font-semibold text-metal-900 md:text-heading-3 dark:text-white">
                <span className="block">"From Budgeting to</span>
                <span className="block">Payment - We've Got</span>
                <span className="block">You Covered"</span>
              </h1>
              <p className="mb-7 mt-2 w-full text-body-4 font-normal text-metal-600 md:max-w-[500px] lg:max-w-[526px] lg:text-body-3 dark:text-metal-300">
              Send and receive money anytime, anywhere. With lightning-fast processing and user-friendly features, staying connected financially has never been easier.
              Manage all aspects of your finances in one intuitive app. Make smarter choices, save more, and enjoy a hassle-free financial life.
              </p>
              <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-5">
                <div className="inline-flex w-[270px] items-center justify-between divide-x-2 divide-metal-100 rounded-lg border border-metal-200 bg-white px-3.5 py-3 dark:border-metal-600 dark:bg-metal-900">
                  <input className="text-body-4 font-normal outline-none text-metal-600 dark:text-white" placeholder='Email Adress'/>
                  {/* <button className="pl-2" onClick={() => copyToClipboard('npm install keep-react')}>
                    {copy ? <Check size={18} color="#8897AE" /> : <Clipboard size={18} color="#8897AE" />}
                  </button> */}
                </div>
                <Link
                  href="/sign-up"
                  className={`${buttonVariants({ size: 'lg'})} bg-slate-900 text-white`}>
                  Start Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero