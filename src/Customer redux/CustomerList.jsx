import { createSlice } from "@reduxjs/toolkit";
import SignUp from "../Customer/SignUp";
import AxiosService from "../utils/Api";
import { useNavigate } from "react-router-dom";



// Posting from API
const handleAddUsers=async(values)=>{
    try {
        let res = await AxiosService.post('/signUp',values)
     } catch (error) {
        console.log(error)
     }
}


//Checking the userName and phone which is present on API or not

//getting from API

export const customerUserList=createSlice({
    
    name:"CustomerList",
    initialState:[],
    reducers:{
        handleAddUser:(state,action)=>{
            // handleAddUsers(values)
            handleAddUsers(action.payload)
            //  setsignIn(false)
        },
    }
})
export const {handleAddUser,handleSignIn} = customerUserList.actions
export default customerUserList.reducer



// if statement    state.push({
//     userName:userName,
//     phone:phone
// })


// HandleAdduser old function

// let {values,setnavigateToggle,setnavigateSignUp}=action.payload
// let{userName,phone}=values
// if(state.length===0){
//       state.push({
//          userName:userName,
//          phone:phone})
// }
// return setnavigateToggle(false)

