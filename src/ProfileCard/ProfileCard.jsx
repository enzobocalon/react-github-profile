import React from "react";
import '../App.css'
import './ProfileCard.css'

import { MdDoubleArrow } from 'react-icons/md'

const ProfileCard = ({user}) => {
    console.log(user)
    return (
        <>
        <div className="container">
            <div className="profile">
                <img src={user.avatar_url}/>
                <div className="profile-user">
                    <p>{user.login}</p>
                    <p>{user.bio}</p>
                </div>
            <a href={`https://github.com/${user.login}`} target="__blank">
                <MdDoubleArrow />
            </a>
            </div>
        </div>
        </>
    )
}

export default ProfileCard