import React from 'react';
import './Profile.scss';
import { useSelector } from "react-redux";
import { getAuth } from "../../store/Selectors/Auth";
import imgProfile from '../../img/profile.png';

function Profile() {

    const auth = useSelector(getAuth);

    return (
        <div className="pro">
            <img src={imgProfile} alt="img" />
            <h1>Hello <span className="capitalize">{auth.username}</span></h1>
        </div>
    )
}

export default Profile
