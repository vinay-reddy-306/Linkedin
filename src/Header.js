import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Logo from './LinkedInLogo.png'
import avatarLogo from './avatarLogo.png'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter, Chat, Notifications} from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className='header'>
            <div className='header_left'>
                <img src={Logo} alt='logo'/>
                <div className='header_search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search'></input>
                </div>
           </div>
            <div className='header_right'>
                <HeaderOptions Icon={HomeIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOptions Icon={BusinessCenter} title='Jobs' />
                <HeaderOptions Icon={Chat} title='Messaging' />
                <HeaderOptions Icon={Notifications} title='Notifications' />
                <HeaderOptions avatar={avatarLogo} avatar={true} title='Me' onClick={logoutOfApp} />
           </div>
        </div>
    )
}

export default Header
