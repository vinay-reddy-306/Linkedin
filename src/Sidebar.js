import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)
    
    const recent = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src='https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80' alt='background img' />
                <Avatar src={user.photoURL} className='sidebar_avatar' >
                {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar_statcount'>2,543</p>
                </div>
                <div className='sidebar_stat'>
                <p>Views on posts</p>
                    <p className='sidebar_statcount'>2,443</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recent('Reactjs')}
                {recent('Javascript')}
                {recent('Programming')}
                {recent('Frontend')}
                {recent('Redux')}
            </div>
        </div>
    )
}

export default Sidebar
