import React, { useState } from 'react'
import { usePosts } from './store/userStore'

function Posts() {
    const { posts,addPost} = usePosts()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [postID, setPostID] = useState(0)

    const handlePosts = () : void => {
        setPostID((prev) => prev + 1)
        addPost({id: postID.toString(), title: title, content: content})
        setTitle("")
        setContent("")
        setPostID(0)
    }
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
        <h1 className='font-extrabold text-xl'>Create new post</h1>  
        <form action="" className='max-w-md bg-gray-50 rounded-md shadow-md p-2'>
        <label htmlFor="">Title</label>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className='w-full p-2 rounded-md border'/>
        <label htmlFor="">Content</label>
        <input type="text" value={content} onChange={(event) => setContent(event.target.value)} className='w-full p-2 rounded-md border'/>
        <button type='button' onClick={handlePosts} className='py-2 font-extrabold bg-black w-full rounded-md mt-4 text-white cursor-pointer'>Add post</button>
        </form>  
        <div className='w-[40%] shadow-md p-2 mt-10 rounded-md'>{
         posts.map((item) => (
            <div key={item.id} className='mb-4'>
                <h1 className='font-extrabold text-gray-800'>{item.title}</h1>
                <p className='text-gray-600 text-sm'>{item.content}</p>
            </div>
         ))    
        }</div>  
    </div>
  )
}

export default Posts
