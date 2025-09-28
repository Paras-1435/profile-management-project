// import React, { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import UpdateUser from '../components/UpdateUser'
// import { deletUser } from '../Features/userSlice'




// function Users() {
//     const UpdateFormRef=useRef()
//     const users = useSelector((state) => state.users.users)
//     const dispatch = useDispatch();
//     console.log(users)


//   const showUpdateForm=()=>{
//       UpdateFormRef.current.classList.toggle("updateForm");
//       UpdateFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//   }




//     return (


//         <>
//             <div className='min-h-screen bg-gray-900 p-10 relative'>
//                  <h1  className='text-center text-4xl text-shadow-white tracking-wider font-semibold text-white   '>Users Profiles</h1>
//                 <div className='px-2 bg-green-500  w-25 text-center font-semibold  text-black py-1 border-1 top-28 right-75 z-50  shadow-black shadow-lg rounded-lg absolute'>
//                     <button onClick={showUpdateForm}  >Update</button>
//                 </div>
                 
//                 <div className='w-200 shadow-inner  shadow-black rounded-xl p-6 mt-5 relative h-100 flex flex-wrap pt-15 px-10 gap-5 overflow-y-scroll  mx-auto  bg-amber-50 border-1'>
                           
//                     {users.map((user) => (
//                         <>
//                             <div key={user.id} className='w-60 mt-5 mb-10 relative pt-20 text-center [&_p]:text-red-600 [&_span]:text-black  font-semibold px-5 h-50 border-1 shadow-black rounded-lg shadow-lg'>
//                                 <div className="img border-1 rounded-full w-25 h-25 absolute top-[-45%]  transform translate-x-1/2 translate-y-1/2 overflow-hidden">
//                                     <img className='w-full h-full bg-cover' src={user.img} alt="" />
//                                 </div>
//                                 <p>Employee id:  <span>{user.id}</span></p>
//                                 <p>Name:  <span>{user.name}</span></p>
//                                 <p>Position:  <span>{user.rol}</span></p>
//                                 <p>Salary:  <span>{user.sal}</span></p>
//                                 <button onClick={()=>dispatch(deletUser(user.id))} className='px-2 bg-red-500  text-white py-1 border-1 left-40 top-50 rounded-lg absolute'>Delete</button>
//                             </div>
//                         </>
//                     ))
                   
//                 }
             
//                 </div>
//                 <div className='hidden' ref={UpdateFormRef}>
//                     <UpdateUser />
//                 </div>
//             </div>




//         </>
//     )
// }


// export default Users

import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UpdateUser from '../components/UpdateUser'
import { deletUser } from '../Features/userSlice'
import { Link } from 'react-router-dom'

function Users() {
    const UpdateFormRef = useRef()
    const users = useSelector((state) => state.users.users)
    const dispatch = useDispatch()

    const showUpdateForm = () => {
        UpdateFormRef.current.classList.toggle("updateForm")
        UpdateFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className='min-h-screen bg-gray-900 p-4 sm:p-10 relative'>
            <h1 className='text-center text-2xl sm:text-4xl text-white font-semibold tracking-wide mb-6'>
                Users Profiles
            </h1>

              <Link to="/"className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"> ← Back</Link>

            {/* Update Button */}
            <div>
                <div className='absolute top-20 right-4 sm:right-20 z-50'>
                <button className='px-4 py-2 bg-green-500 text-black font-semibold rounded-lg shadow-lg hover:bg-green-600 transition' onClick={showUpdateForm}>
                    Update
                </button>
            </div> 
            </div>
           

            {/* Users Grid */}
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 overflow-y-auto p-2 sm:p-6 bg-amber-50 rounded-xl shadow-inner shadow-black mx-auto max-w-full'>
                {users.map((user) => (
                    <div key={user.id} className='relative bg-amber-100 mt-10 w-full sm:w-60 p-4 pt-20 text-center font-semibold border rounded-lg shadow-lg'>
                        {/* Image */}
                        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border'>
                            <img className='w-full h-full object-cover' src={user.img} alt="" />
                        </div>

                        <p>Employee id: <span className='text-black'>{user.id}</span></p>
                        <p>Name: <span className='text-black'>{user.name}</span></p>
                        <p>Position: <span className='text-black'>{user.rol}</span></p>
                        <p>Salary: <span className='text-black'>{user.sal}</span></p>

                        {/* Delete Button */}
                        <button
                            onClick={() => dispatch(deletUser(user.id))}
                            className='absolute bottom-0  right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-lg shadow-md hover:bg-red-600 transition'
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Update Form */}
            <div className='hidden' ref={UpdateFormRef}>
                <UpdateUser />
            </div>
        </div>
    )
}

export default Users
