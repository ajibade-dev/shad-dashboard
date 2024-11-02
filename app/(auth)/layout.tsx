import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'


const AuthLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='h-[100vh] flex justify-center items-center relative'>
      <div className="absolute bottom-5 right-0 text-white">
        <ThemeToggle />
      </div>
      {children}</div>
  )
}

export default AuthLayout