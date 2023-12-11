import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between absolute top-0 left-0 right-0 p-6 px-6 md:px-16 w-full items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        className="w-36 md:w-44 h-8 md:h-12"
        priority
        width={188}
        height={50}
      />
      <div className="flex-row gap-10 items-center hidden lg:flex">
        <Link className="text-white" href="/features">
          Features
        </Link>
        <Link className="text-white" href="/support">
          Support
        </Link>
        <Link className="text-white" href="/about-us">
          About us
        </Link>
        <div className="flex flex-row gap-3">
          <Button text="Try our tool" />
          <Button className='bg-transparent border border-white text-white' text="Login" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
