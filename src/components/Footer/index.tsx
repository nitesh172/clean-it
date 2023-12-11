import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

const Footer = () => {
  return (
    <footer className="bg-[#0C2B5F] bg-[url('/footer-back.svg')] bg-no-repeat px-6 lg:px-16 py-16 flex flex-col gap-9">
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-20">
        <div className="flex flex-row">
          <input
            placeholder="Your email"
            className="appearance-none outline-none border-none bg-white p-2 flex-1 md:flex-none w-54 lg:w-80 rounded-[4px] rounded-r-none"
          />
          <Button
            text="Subscribe"
            className="rounded-[4px] rounded-l-none bg-primary text-white"
          />
        </div>
        <div className="relative w-[280px] md:w-[300px] lg:w-[350px] text-lg font-light text-white">
          Welcome to our cutting-edge Office Cleaning and Scheduling platform
          <Image
            src="/wipe2.svg"
            alt="logo"
            className="w-full h-full absolute top-0 hidden sm:block -right-24 md:-right-28"
            priority
            width={188}
            height={50}
          />
          <Image
            width={120}
            height={120}
            priority
            src={'/wiper.svg'}
            alt="wave2"
            className="w-[70px] object-cover h-[54px] absolute hidden sm:block -top-0 -right-[70px] md:-right-20 lg:-right-14"
          />
        </div>
      </div>
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-36 md:w-44 h-8 md:h-12"
        priority
        width={188}
        height={50}
      />
      <div className="text-2xl font-light text-white">
        CleanIT helps me keep track of all the loose ends and ensures a clear
        overview. In an everyday life with + 50 employees, it is important not
        to lose sight of it.
      </div>
      <div className="flex-row gap-10 items-center flex flex-wrap pb-9 border-b">
        <Link className="text-white font-light" href="/features">
          Features
        </Link>
        <Link className="text-white font-light" href="/support">
          Support
        </Link>
        <Link className="text-white font-light" href="/about-us">
          About us
        </Link>
        <Link className="text-white font-light" href="/try-out-tool">
          Try our tool
        </Link>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-8">
          <Link className="text-white font-light" href="/term-and-service">
            Terms and service
          </Link>
          <Link className="text-white font-light" href="/privacy-policy">
            Privacy policy
          </Link>
        </div>
        <div className="text-white font-light">
          © {new Date().getFullYear()} CleanIT
        </div>
      </div>
    </footer>
  )
}

export default Footer
