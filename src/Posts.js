import { Avatar } from '@material-ui/core'
import { ChatOutlined,SendOutlined,ShareOutlined,ThumbUpAltOutlined } from '@material-ui/icons'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import './Posts.css'

const Posts=forwardRef(({ name, description, message, photoUrl },ref) => {
    return (
        <div ref={ref} className='posts'>
            <div className='posts_header'>
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className='posts_info'>
                    <h2>{ name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className='posts_body'>
                <p>{message}</p>
            </div>
            <div className='posts_buttons'>
                <InputOption Icon={ThumbUpAltOutlined} title='Like' color='gray' />
                <InputOption Icon={ChatOutlined} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlined} title='Share' color='gray' />
                <InputOption Icon={SendOutlined} title='Send' color='gray'/>
            </div>
        </div>
    )
})

export default Posts
