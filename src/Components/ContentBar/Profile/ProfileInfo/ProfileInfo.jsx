import React from 'react'
import Preloader from '../../../Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

function ProfileInfo(props) {
    return props.profile
        ? <div>
            <img src={props.profile.photos.large}></img>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJob
                ? <div>
                    <div>Ищу работу</div>
                    <div>{props.profile.lookingForAJobDescription}</div>
                </div>
                : <div>Работаю</div>}
            </div>
            <div>
                <ProfileStatus updateStatus={props.updateStatus} status={props.status}></ProfileStatus>
            </div>
        </div>
        : <Preloader />

}

export default ProfileInfo