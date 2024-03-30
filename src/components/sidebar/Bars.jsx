import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { sidebarToggle } from '../../store/Slices'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Bars() {
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(sidebarToggle(toggle))
        setToggle(!toggle)
    }

    return (
        <>
            <div className={toggle ? 'bg-[#121212] h-12 w-[170px] mx-auto my-1 rounded-lg flex justify-between items-center border-[1px] border-slate-500 md:hidden' : 'bg-[#121212] min-h-12 w-16 mx-auto my-1 rounded-lg flex justify-center items-center border-[1px] border-slate-500 md:hidden'}>
                {
                    toggle
                        ? <span className='cursor-pointer mx-5'>
                            <FontAwesomeIcon icon={faXmark} size='xl' onClick={handleClick} style={{ color: "#lightgray", }} />
                        </span>
                        : <span className='cursor-pointer mx-5'>
                            <FontAwesomeIcon icon={faBars} size='xl' onClick={handleClick} style={{ color: "lightgray" }} />
                        </span>
                }

            </div>
        </>
    )
}

export default Bars