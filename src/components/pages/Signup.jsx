import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext';

const Signup = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp} = UserAuth();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
    try{
      await signUp(email, password);
      navigate('/grid');
      console.log("Congratulations! You SignUp Successfully")
    }catch(error){
      console.log(error)
      setError(error.message);
    }
  }

  return (
    <>
      <div className='my-12 md:max-w-[40%] max-w-[70%] mx-auto md:text-lg text-sm'>
        <h1 className='text-white text-2xl md:text-3xl mb-8 font-bold  mx-auto text-center'>Sign Up to your account</h1>
        {error ? <p className="p-3 bg-red-400 my-3">{error}</p> : null}
        <form onSubmit={submitHandler} className='text-white text-lg'>
          <div className='mb-8 flex flex-col'>
            <label htmlFor="email" className='mb-2'>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} required type="email" id='email' className="rounded text-gray-800 p-2" />
          </div>
          <div className='mt-8 flex flex-col'>
            <label htmlFor="password" className='mb-2'>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} required type="password" id='password' className="rounded text-gray-800 p-2" />
          </div>
          <div className='mb-10 mt-3'>
            <p>Already Sign Up?
              {" "}
              <Link to="/" className='text-gray-400' >Sign In</Link></p>
          </div>
          <div className='my-10 mx-auto w-max'>
            <button className='bg-blue-800 py-2 px-5 rounded-xl'>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup