"use client"

import React from 'react'
import BackButton from '@/components/BackButton'
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { 
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    FormItem
} from "@/components/ui/form"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import posts from '@/data/posts';
import { useParams } from 'next/navigation';

const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required mf!'
    }),
    body: z.string().min(1, {
        message: 'Body is required mf!'
    }),
    author: z.string().min(1, {
        message: 'Author is required mf!'
    }),
    date: z.string().min(1, {
        message: 'Date is required mf!'
    }),
})

interface PostEditPageProps {
    params:{
        id:string;
    }
}

// if this page later fails, put this code below in the PostEditPage bracket and remove const params = useParams()
// {params}: PostEditPageProps
function PostEditPage() {
    const {toast} = useToast();
    const params = useParams();
    const post = posts.find ((post) => post.id === params.id);
   
    const form  = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title:post?.title || "",
            body:post?.body || "",
            author:post?.author || "",
            date:post?.date || "",
        }
    })

    const handleSubmit = (data: z.infer <typeof formSchema>) => {
        toast({
            title: 'Post has been updated succesfully',
            description: `Updated by ${post?.author} on ${post?.date}`,
        })
    }

  return (
    <>
    <BackButton text='Back to Posts' link='/posts' />

    <h3 className="text-2xl mb-4">Edit Post</h3>
    <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-8'
        >
            <FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='uppercase tesxt-sx font-bold text-zinc-500 dark:text-white'>Title</FormLabel>
      <FormControl>
        <Input className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0' placeholder="Enter Title" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
{/* The body */}
<FormField
  control={form.control}
  name="body"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='uppercase tesxt-sx font-bold text-zinc-500 dark:text-white'>Body</FormLabel>
      <FormControl>
        <Textarea className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0' placeholder="Enter Body" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
{/* the author */}
<FormField
  control={form.control}
  name="author"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='uppercase tesxt-sx font-bold text-zinc-500 dark:text-white'>Author</FormLabel>
      <FormControl>
        <Input className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0' placeholder="Enter Author" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

{/* date */}
<FormField
  control={form.control}
  name="date"
  render={({ field }) => (
    <FormItem>
      <FormLabel className='uppercase tesxt-sx font-bold text-zinc-500 dark:text-white'>Date</FormLabel>
      <FormControl>
        <Input className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0' placeholder="Enter Date" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


{/* the button */}
<Button className='w-full dark:bg-slate-800 dark:text-white'>Update Post</Button>
        </form>
    </Form>

    </>
  )
}

export default PostEditPage