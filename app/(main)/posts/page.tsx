import React from 'react'
import PostsTable from '@/components/posts/PostsTable'
import BackButton from '@/components/BackButton'
import PostPagination from '@/components/posts/PostPagination'
type Props = {}

const Postpage = (props: Props) => {
  return (
    <>
    <BackButton text='Go back' link='/' />
    <PostsTable />
    <PostPagination />
    </>
  )
}

export default Postpage