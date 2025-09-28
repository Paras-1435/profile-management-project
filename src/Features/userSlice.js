import { createSlice } from "@reduxjs/toolkit";
import userImages from "../assets/userImages"; // 👈 import images array

const initialState={
    users:[
        {id:1,name:'Parth',rol:'Security Analyst',sal:25000,img:userImages[0]},
        {id:2,name:'Paras',rol:'Software Dev.',sal:35000 ,img:userImages[1]}
    ],
     nextImgIndex: 2, // 👈 start from next available image
}


 export const userSlice=createSlice(
    {
      name:'users',
      initialState,


      reducers:{
        update:(state,action)=>{
          const { id, field,val}=action.payload;
          const user = state.users.find((u) => u.id === id);
          if (user) {
            console.log(user)
          user[field] = val;
   
      }
        },


        creatUser:(state,action)=>{
        // state.users.push(action.payload)
        //  console.log(state.users );
         const newUser = {
        ...action.payload,
        img: userImages[state.nextImgIndex % userImages.length], // 👈 pick next image
      };

      state.users.push(newUser);

      // move to next index
      state.nextImgIndex = (state.nextImgIndex + 1) % userImages.length;

      console.log(state.users);
        },


        deletUser:(state,action)=>{
          const id = action.payload;
          state.users = state.users.filter(user => user.id !== id);
        }
      }
    }
)
export const {update,creatUser,deletUser} = userSlice.actions
export default userSlice.reducer
