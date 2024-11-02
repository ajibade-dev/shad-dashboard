"use client"

import React from 'react'

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { 
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    FormItem
} from "@/components/ui/form"
import { Card, CardContent, CardDescription,CardHeader, CardTitle } from '../ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useParams } from 'next/navigation';

const formSchema = z.object({
    email: z.string().min(1, {
        message: 'Email is required mf!'
    }).email({
        message: 'Please enter a valid email'
    }),
    password: z.string().min(1, {
        message: 'Password is required mf!'
    }),
})



// if this page later fails, put this code below in the PostEditPage bracket and remove const params = useParams()
// {params}: PostEditPageProps

function LoginForm() {
    const router = useRouter();
   
    const form  = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email:"",
            password: "",
        },
    });

    const handleSubmit = (data: z.infer <typeof formSchema>) => {
       router.push('/')
    }

  return (
    <Card className='shadow-lg'>
    <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Log into your account with your credentials</CardDescription>
    </CardHeader>
    <CardContent className='space-y-2'>
    <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
{/* for the email */}
    <FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='uppercase tesxt-sx font-bold text-zinc-500 dark:text-white'>Email</FormLabel>
      <FormControl>
      <Input className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0' placeholder="Enter Email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
{/* for the password */}
<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='uppercase tesxt-sx font-bold text-zinc-500 dark:text-white'>Password</FormLabel>
      <FormControl>
      <Input type='password' className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0' placeholder="Enter Password" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
<Button className='w-full'>Sign In</Button>
            </form> 
            </Form>
    </CardContent>
    </Card>
  )
}

export default LoginForm
