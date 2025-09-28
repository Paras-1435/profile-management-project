// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { creatUser } from '../Features/userSlice'


// function CreateUser() {
//     const initialVal = {
//         id: '',
//         name: '',
//         rol: '',
//         sal:'',
       
//     }
//     const [formdata, setFormdata] = useState(initialVal)
//     const dispatch = useDispatch()


//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setFormdata(prev => ({...prev,[name]: value}));




//     }


//     const handlesubmit = (e) => {
         
    
//         e.preventDefault();
//         console.log(formdata)
//         const user = {
//       ...formdata,
//       id: Number(formdata.id),
//       sal:Number(formdata.sal),
 
//                     }
//                     console.log(user)
//         dispatch(creatUser(user))
//         setFormdata(initialVal)


//     }


//     return (
//         <>


//            <div className='bg-zinc-900 min-h-screen py-10'>


//           <h1 className='text-center text-5xl text-white m-5'>Create New User Profile</h1>
//             <div className="form-con  rounded-lg w-100 border-1 border-white h-auto p-10 mx-auto">
//                 <form action="" onSubmit={handlesubmit}>
//                     <div className=' border-1 border-white rounded-lg pb-5 flex flex-col justify-center items-center [&_input]:border-1 [&_input]:mt-5 [&_input]:px-2 [&_input]:py-2 [&_input]:rounded-lg [&_input]:border-white [&_input]:placeholder-gray-400 [&_input]:text-white'>
//                         <input onChange={handleInput} value={formdata.id} type="text" name="id" placeholder='Enter id ' />
//                         <input onChange={handleInput} value={formdata.name} type="text" name="name" placeholder='Enter Name ' />
//                         <input onChange={handleInput} value={formdata.rol} type="text" name="rol" placeholder='Enter Position ' />
//                         <input onChange={handleInput} value={formdata.sal} type="text" name="sal" placeholder='Enter Salary ' />
                     


//                     </div>
//                     <div className='w-30 bg-blue-500 text-white mt-5 mx-auto px-2 py-1 border-1 rounded-lg'>
//                         <button type='submit'>Add profile</button>
//                     </div>
//                 </form>


//             </div>
//              </div>
//         </>
//     )
// }


// export default CreateUser

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { creatUser } from "../Features/userSlice";
import { Link } from "react-router-dom";

function CreateUser() {
  const initialVal = {
    id: "",
    name: "",
    rol: "",
    sal: "",
  };
  const [formdata, setFormdata] = useState(initialVal);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const user = {
      ...formdata,
      id: Number(formdata.id),
      sal: Number(formdata.sal),
    };
    dispatch(creatUser(user));
    setFormdata(initialVal);
  };

  return (
    <div className="bg-zinc-900 min-h-screen py-10 px-4">
       <Link to="/"className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"> ← Back</Link>
      <h1 className="text-center text-3xl md:text-5xl text-white mb-8">
        Create New User Profile
      </h1>

      <div className="form-con max-w-lg md:max-w-2xl bg-zinc-800 rounded-lg border border-white h-auto p-6 md:p-10 mx-auto">
        <form onSubmit={handlesubmit}>
          {/* Input fields */}
          <div className="flex flex-col gap-4 [&_input]:border [&_input]:px-3 [&_input]:py-2 [&_input]:rounded-lg [&_input]:border-white [&_input]:placeholder-gray-400 [&_input]:text-white">
            <input
              onChange={handleInput}
              value={formdata.id}
              type="text"
              name="id"
              placeholder="Enter ID"
            />
            <input
              onChange={handleInput}
              value={formdata.name}
              type="text"
              name="name"
              placeholder="Enter Name"
            />
            <input
              onChange={handleInput}
              value={formdata.rol}
              type="text"
              name="rol"
              placeholder="Enter Position"
            />
            <input
              onChange={handleInput}
              value={formdata.sal}
              type="text"
              name="sal"
              placeholder="Enter Salary"
            />
          </div>

          {/* Submit button */}
          <div className="w-full flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition text-sm md:text-base"
            >
              Add Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
