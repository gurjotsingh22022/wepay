import { banks } from '@/app/lib/banks'
import Image from 'next/image'
import React from 'react'

function Available() {
  return (
    <>
    <section className="relative py-10 lg:py-20 mt-0 lg:mt-10" id='banks'>
      <div className="mx-auto max-w-7xl px-6 2xl:px-0">
        <div className="my-5 flex items-center justify-between">
          <div className="mx-auto mb-4 px-5 text-center md:max-w-xl md:px-0">
            <h2 className="mb-3 text-[24px] !font-semibold text-black lg:text-heading-5 dark:text-white">
            Global Financial Connectivity - Access Over 12,000 Banks and Institutions
            </h2>
            <p className="text-body-4 font-normal leading-6 text-metal-600 md:text-body-3 dark:text-metal-300">
            Our app brings the world of finance to your fingertips with seamless access to <b>12,000+ banks and financial institutions worldwide.</b> From local credit unions to global banking giants, our platform ensures that you stay connected with the financial networks that matter most.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {banks.map((item: any) => {
            const { img, name } = item
            return (
              <span
                key={name}
                className="flex items-center gap-2.5 rounded-xl border border-dashed border-metal-200 bg-white px-5 py-2.5 transition-all duration-300 hover:bg-metal-900 hover:text-white md:px-8 md:py-4 dark:bg-metal-900 dark:hover:bg-metal-800">
                <Image className='w-auto h-[20px] lg:h-[40px]' src={`/icons/${img}`} alt={`${name}`} width={30} height={70} unoptimized/>
                {name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}

export default Available