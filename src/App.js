import React, { useState, useEffect } from 'react'
import './App.css'
import { MdSearch } from 'react-icons/md'

import api from './services/api'

import Header from './Header/Header'
import ProfileCard from './ProfileCard/ProfileCard'
import Footer from './Footer/Footer'

const App = () => {
    const [user, setUser] = useState([]);
    const [searchUser, setSearchUser] = useState('');

    const callAPI = (id) => {
        api(id).then((data) => {
            setUser(data)
        });
        
    }

    useEffect(() => {
        callAPI('')
    }, [])

    return (
        <>
            <Header />
            
            <div className='container'>
                <div className='search'>
                    <input 
                    placeholder="Search for a github profile using it's id, eg: facebook" 
                    value={searchUser}
                    onChange = {(e) => setSearchUser(e.target.value)}
                    onKeyPress = {(e) => {
                        if (e.key === 'Enter') {callAPI(searchUser)}
                    }}/>
                    <MdSearch style={{fontSize: '1.5rem', cursor: 'pointer'}} onClick={() => callAPI(searchUser)}/>
                </div>
            </div>

            {
                !user?.hasOwnProperty('message') ? (
                    <ProfileCard user = {user}/>
                ) : (
                    <div className='container'>
                        <div className='profile empty'>
                            <p>No user found</p>
                        </div>
                    </div>
                )
            }

            <Footer />

        </>
    )


}

export default App;