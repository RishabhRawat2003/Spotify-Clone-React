import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { userLogin } from '../../../store/UserSlices'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'

function LoginPage() {

    const [rememberToggle, setRememberToggle] = useState(true)
    const [userNameId , setUserNameId] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleClick() {
        setRememberToggle(!rememberToggle)
    }

    function handleSubmit(){
        dispatch(userLogin(userNameId))
        navigate('/')
    }

    return (
        <>
            <header className='h-28 bg-[#121212] md:bg-black'>
                <div className='w-auto h-full flex items-center mx-9 md:mx-12'>
                    <FontAwesomeIcon icon={faSpotify} size='2xl' style={{ color: "#ffffff", }} />
                    <span className='text-white font-bold text-base mx-2 md:text-2xl xl:text-3xl'>Spotify</span>
                </div>
            </header>
            <div className='w-full h-auto bg-[#121212] md:bg-gray-950 md:py-14'>
                <div className='w-full h-auto flex flex-col md:w-[700px] md:mx-auto md:bg-[#121212] rounded-xl'>
                    <h1 className='mx-7 text-white text-3xl font-bold md:mx-auto md:text-5xl md:mt-20'>Log in to Spotify</h1>
                    <div className='w-[85%] h-auto flex flex-col mx-auto mt-10'>
                        <p className='w-full h-12 my-1 flex justify-center items-center border-[1px] border-gray-500 rounded-full cursor-default active:border-white md:hover:border-white relative md:w-[60%] mx-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className='absolute left-10'>
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <span className='text-white font-semibold'>Continue with Google</span>
                        </p>
                        <p className='w-full h-12 my-1 flex justify-center items-center border-[1px] border-gray-500 rounded-full cursor-default active:border-white md:hover:border-white relative md:w-[60%] mx-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className='absolute left-10'>
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                            <span className='text-white font-semibold'>Continue with Facebook</span>
                        </p>
                        <p className='w-full h-12 my-1 flex justify-center items-center border-[1px] border-gray-500 rounded-full cursor-default active:border-white md:hover:border-white relative md:w-[60%] mx-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className='absolute left-10'>
                                <path fill='white' stroke='white' d="M 33.375 0 C 30.539063 0.191406 27.503906 1.878906 25.625 4.15625 C 23.980469 6.160156 22.601563 9.101563 23.125 12.15625 C 22.65625 12.011719 22.230469 11.996094 21.71875 11.8125 C 20.324219 11.316406 18.730469 10.78125 16.75 10.78125 C 12.816406 10.78125 8.789063 13.121094 6.25 17.03125 C 2.554688 22.710938 3.296875 32.707031 8.90625 41.25 C 9.894531 42.75 11.046875 44.386719 12.46875 45.6875 C 13.890625 46.988281 15.609375 47.980469 17.625 48 C 19.347656 48.019531 20.546875 47.445313 21.625 46.96875 C 22.703125 46.492188 23.707031 46.070313 25.59375 46.0625 C 25.605469 46.0625 25.613281 46.0625 25.625 46.0625 C 27.503906 46.046875 28.476563 46.460938 29.53125 46.9375 C 30.585938 47.414063 31.773438 48.015625 33.5 48 C 35.554688 47.984375 37.300781 46.859375 38.75 45.46875 C 40.199219 44.078125 41.390625 42.371094 42.375 40.875 C 43.785156 38.726563 44.351563 37.554688 45.4375 35.15625 C 45.550781 34.90625 45.554688 34.617188 45.445313 34.363281 C 45.339844 34.109375 45.132813 33.910156 44.875 33.8125 C 41.320313 32.46875 39.292969 29.324219 39 26 C 38.707031 22.675781 40.113281 19.253906 43.65625 17.3125 C 43.917969 17.171875 44.101563 16.925781 44.164063 16.636719 C 44.222656 16.347656 44.152344 16.042969 43.96875 15.8125 C 41.425781 12.652344 37.847656 10.78125 34.34375 10.78125 C 32.109375 10.78125 30.46875 11.308594 29.125 11.8125 C 28.902344 11.898438 28.738281 11.890625 28.53125 11.96875 C 29.894531 11.25 31.097656 10.253906 32 9.09375 C 33.640625 6.988281 34.90625 3.992188 34.4375 0.84375 C 34.359375 0.328125 33.894531 -0.0390625 33.375 0 Z M 32.3125 2.375 C 32.246094 4.394531 31.554688 6.371094 30.40625 7.84375 C 29.203125 9.390625 27.179688 10.460938 25.21875 10.78125 C 25.253906 8.839844 26.019531 6.828125 27.1875 5.40625 C 28.414063 3.921875 30.445313 2.851563 32.3125 2.375 Z M 16.75 12.78125 C 18.363281 12.78125 19.65625 13.199219 21.03125 13.6875 C 22.40625 14.175781 23.855469 14.75 25.5625 14.75 C 27.230469 14.75 28.550781 14.171875 29.84375 13.6875 C 31.136719 13.203125 32.425781 12.78125 34.34375 12.78125 C 36.847656 12.78125 39.554688 14.082031 41.6875 16.34375 C 38.273438 18.753906 36.675781 22.511719 37 26.15625 C 37.324219 29.839844 39.542969 33.335938 43.1875 35.15625 C 42.398438 36.875 41.878906 38.011719 40.71875 39.78125 C 39.761719 41.238281 38.625 42.832031 37.375 44.03125 C 36.125 45.230469 34.800781 45.988281 33.46875 46 C 32.183594 46.011719 31.453125 45.628906 30.34375 45.125 C 29.234375 44.621094 27.800781 44.042969 25.59375 44.0625 C 23.390625 44.074219 21.9375 44.628906 20.8125 45.125 C 19.6875 45.621094 18.949219 46.011719 17.65625 46 C 16.289063 45.988281 15.019531 45.324219 13.8125 44.21875 C 12.605469 43.113281 11.515625 41.605469 10.5625 40.15625 C 5.3125 32.15625 4.890625 22.757813 7.90625 18.125 C 10.117188 14.722656 13.628906 12.78125 16.75 12.78125 Z"></path>
                            </svg>
                            <span className='text-white font-semibold'>Continue with Apple</span>
                        </p>
                        <p className='w-full h-12 my-1 flex justify-center items-center border-[1px] border-gray-500 rounded-full cursor-default active:border-white md:hover:border-white md:w-[60%] mx-auto'>
                            <span className='text-white font-semibold'>Continue with phone number</span>
                        </p>
                    </div>
                    <div className='bg-gray-400 w-[90%] h-[1px] my-10 mx-auto md:w-[80%]'></div>
                    <div className='w-full h-auto flex flex-col px-8 md:w-[55%] mx-auto'>
                        <label htmlFor="email" className='w-40'>
                            <span className='text-white font-bold'>Email or username</span>
                        </label>
                        <input type="text" id='email' placeholder='Email or username' value={userNameId} onChange={(e)=>setUserNameId(e.target.value)} className='h-12 w-full my-2 text-white border-2 border-gray-500 px-3 bg-[#121212] hover:border-white outline-none focus:border-white' />
                        <label htmlFor="password" className='w-28 mt-4'>
                            <span className='text-white font-bold'>Password</span>
                        </label>
                        <input type="password" id='password' placeholder='Password' className='h-12 w-full my-2 text-white border-2 border-gray-500 px-3 bg-[#121212] hover:border-white outline-none focus:border-white' />
                        <p className='flex justify-between h-14 w-36 items-center'>
                            <span onClick={handleClick} id='remember' className={rememberToggle ? 'w-10 rounded-full h-5 bg-green-500 flex items-center justify-end duration-200' : 'w-10 rounded-full h-5 bg-gray-500 flex items-center justify-start duration-200'}>
                                <span className='h-4 bg-black w-4 rounded-full mx-0.5'></span>
                            </span>
                            <label htmlFor="remember">
                                <span className='text-white text-sm font-semibold'>Remember me</span>
                            </label>
                        </p>
                        <p onClick={handleSubmit} className='bg-green-500 my-8 text-black flex justify-center items-center w-[90%] h-12 font-bold mx-auto rounded-full cursor-pointer hover:scale-105'>Login</p>
                        <div className='w-full h-auto flex flex-col justify-center items-center mb-24'>
                            <p className='text-white underline active:text-green-500 md:hover:text-green-500 cursor-pointer'>Forgot your password?</p>
                            <p className='text-gray-500 my-3'>Don't have an account?</p>
                            <p className='text-white underline active:text-green-500 md:hover:text-green-500 cursor-pointer'>Sign up for Spotify</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginPage