import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assects/images/user.png"
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = formData => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }
    return (
        <div>
            <div className={s.mainProfileInfo}>
                <div className={s.avatar}>
                    <img src={profile.photos.large || userPhoto} />
                </div>

                <div className={s.mainDescription}>
                    <div className={s.status}>
                        <ProfileStatusWithHooks  status={status} updateStatus={updateStatus}/>
                    </div>

                    <div className={s.newPhoto}>
                        { isOwner &&
                        <div>
                            <span>Upload a new photo</span>
                            <input type={"file"} onChange={onMainPhotoSelected} />
                        </div> }
                    </div>
                </div>

            </div>
            <div className={s.profileData}>
                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner}
                                   goToEditMode={() => {setEditMode(true)}} /> }
            </div>
        </div>
    )
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.moreInfo}>
        <div>
            <b>FullName</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills: </b> {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me: </b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        {isOwner && <div><button className={s.btn} onClick={goToEditMode} >Edit</button></div>}
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}: </b>{contactValue}</div>
}
export default ProfileInfo;