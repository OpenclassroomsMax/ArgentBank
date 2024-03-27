import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import getUserProfileData from '../../services/api'



function UserProfile(){
    let dispatch = useDispatch()

    let [updateInfo, setUpdateInfo] = useState(false)
    let [updateFirstName, setUpdateFirstName] = useState('')
    let [updateLastName, setUpdateLastName] = useState('')


    async function handleChangeUserInfo(updateFirstName, updateLastName, JWT){
        if(updateFirstName ===''|| updateLastName ===''|| updateFirstName.length === 0 || updateLastName.length === 0){
            alert("error")
        }
        const response = await getUserProfileData(updateFirstName, updateLastName, JWT)
        
    }

    return(
        <div>
            <h1>
            Welcome back
            <br />
            Tony Jarvis!
            </h1>
            <button className="edit-button">Edit Name</button>
        </div>
    );

}