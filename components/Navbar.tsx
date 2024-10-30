import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../img/logo.png"
import { Avatar,AvatarImage,AvatarFallback } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white'>
        <Link href="/">
        <Image src={logo} alt='paul' width={40} />
        
        </Link>

        <DropdownMenu>
  <DropdownMenuTrigger className='focus:outline-noneS'>
  <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' alt='Avatar Image'/>
          <AvatarFallback className='text-black'>AP</AvatarFallback>
        </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Link href="/profile">Profile</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href="/auth">
      Logout
      </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default Navbar