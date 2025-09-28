// import React, { useReducer, useRef, useState } from 'react'

// import { useDispatch, useSelector } from 'react-redux'
// import { update,creatUser } from '../Features/userSlice';


// function UpdateUser() {
     
 
//     const users=useSelector((state)=>state.users.users)
     
//     const [id,setId]=useState('')
//     const [field,setFeild]=useState('')
//     const [val,setVal]=useState('')
//     const dispatch = useDispatch();


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("id-->>>",id)
//         console.log("feild-->>>",field)
//         console.log("val-->>>",val)


//         dispatch(update({ id: Number(id), field, val }));
//         setVal('')
       


//     }


//     return (


//         <>
//             <div className=' rounded-lg shadow-amber-50 shadow-lg w-120 p-5 mt-5 bg-amber-100 ml-60  h-60 border-1'>
//                 <h1  className='text-center text-2xl font-semibold  mb-5 '>Update User Details</h1>
//                 <form action="" onSubmit={handleSubmit}>


//                     <div className='flex w-full flex-col gap-2'>


//                         <div className='flex gap-5'>
//                             <label htmlFor="field">Select Emp Id</label>
//                             <select onChange={(e)=>setId(e.target.value)} value={id} className='w-20 border-1' id='field'>
//                                 <option value="" disabled >select</option>
//                                 {users.map((user)=>(
//                                     <>
//                                     <option value={user.id}>{user.id}</option>
//                                     </>
//                                 ))}
                               
//                             </select>
//                             <label htmlFor="field">Select Feild</label>
//                             <select onChange={(e)=>setFeild(e.target.value)} value={field} className='w-20 border-1' id='field'>
//                                 <option value="" disabled >select</option>
//                                 <option value='name' >Name</option>
//                                 <option value='rol' >Position</option>
//                                 <option value='sal' >Salary</option>
                               
//                             </select>
//                         </div>


//                         <input onChange={(e)=>setVal(e.target.value)} value={val} className='border-1 w-50' type="text" placeholder='Enter Value' />
//                         <button type='submit' className='px-2 bg-green-500 font-semibold  text-black py-1 border-1 top-15 mt-5  shadow-black shadow-lg rounded-lg w-30'>Update</button>
//                     </div>


//                 </form>


//                 <div>
//                     <button className="bg-yellow-500 w-50 px-3 py-2 rounded-2xl ml-60  shadow-black shadow-lg text-x font-semibold text-black" onClick={()=>dispatch(creatUser())}>Create Template</button>
//                 </div>
//             </div>
//         </>
//     )
// }


// export default UpdateUser


import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update, creatUser } from '../Features/userSlice';

function UpdateUser() {
   
    const users = useSelector((state) => state.users.users)
    const [id, setId] = useState('')
    const [field, setFeild] = useState('')
    const [val, setVal] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(update({ id: Number(id), field, val }));
        setVal('')
    }

  

    return (
        <div className='bg-amber-100 rounded-lg shadow-amber-50 shadow-lg p-5 mt-5 border w-full max-w-lg mx-auto sm:max-w-xl md:max-w-2xl'>

    

            <h1 className='text-center text-2xl sm:text-3xl font-semibold mb-5'>Update User Details</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4'>
                    {/* Selectors */}
                    <div className='flex flex-col sm:flex-row gap-4 sm:items-center'>
                        <div className='flex flex-col'>
                            <label htmlFor="id">Select Emp Id</label>
                            <select onChange={(e) => setId(e.target.value)} value={id} className='border rounded-md px-2 py-1 w-full sm:w-24' id='id'>
                                <option value="" disabled>select</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>{user.id}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="field">Select Field</label>
                            <select onChange={(e) => setFeild(e.target.value)} value={field} className='border rounded-md px-2 py-1 w-full sm:w-24' id='field'>
                                <option value="" disabled>select</option>
                                <option value='name'>Name</option>
                                <option value='rol'>Position</option>
                                <option value='sal'>Salary</option>
                            </select>
                        </div>
                    </div>

                    {/* Value input */}
                    <input
                        onChange={(e) => setVal(e.target.value)}
                        value={val}
                        className='border rounded-md px-3 py-2 w-full'
                        type="text"
                        placeholder='Enter Value'
                    />

                    {/* Update button */}
                    <button type='submit' className='w-full sm:w-32 bg-green-500 text-black font-semibold px-4 py-2 rounded-lg shadow-lg mt-4 hover:bg-green-600 transition'>
                        Update
                    </button>
                </div>
            </form>

            {/* Create Template button */}
            <div className='flex justify-center mt-5'>
                <button
                    className="bg-yellow-500 px-4 py-2 rounded-2xl shadow-lg text-sm sm:text-base font-semibold text-black hover:bg-yellow-600 transition"
                    onClick={() => dispatch(creatUser())}
                >
                    Create Template
                </button>
            </div>
        </div>
    )
}

export default UpdateUser
