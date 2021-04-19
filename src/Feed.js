import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import PostAddIcon from '@material-ui/icons/PostAdd';
import ImageIcon from '@material-ui/icons/Image';
import { CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Posts from './Posts';
import { db } from './firebase';
import firebase from 'firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser)
    
    const [input,setInput]=useState('')
    const [post, setpost] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
            setpost(
                snapshot.docs.map((doc) => (
                    {
                        id: doc.id,
                        data:doc.data(),
                    }))
            ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts')
        .add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL || '',
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }
    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <PostAddIcon />
                    <form>
                        <input type='text' placeholder='Write a post'
                            value={input}
                            onChange={e=>setInput(e.target.value) }/>
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className='feed_inputOption'>
                    <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
                    <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNote} title='Event' color='#C0Cbcd' />
                    <InputOption Icon={CalendarViewDay} title='Write article' color='#7fc15e'/>
                </div>
            </div>
            <div className='feed_post'>
                <FlipMove>
                {post.map(({ id, data: { name, description, message, photoUrl }}) => (
                    <Posts
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
                </FlipMove>
                
            </div>
        </div>
    )
}

export default Feed
