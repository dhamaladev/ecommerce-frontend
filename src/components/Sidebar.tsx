import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Navlinks } from '../utils/Links';
import { setSidebarClose } from '../redux/features/toggle/toggleSlice';

const Sidebar = () => {
    const dispatch = useDispatch()
    const closeSidebar = () => dispatch(setSidebarClose())

  return (
    <div className='w-full sm:w-[50%] md:hidden h-full fixed top-0 left-0 bg-slate-700 text-slate-50 p-10 z-50'>
          <div className='text-center'>
          <h1 className="text-2xl font-semibold">
            <Link to="/">Ramailo Ecommerce</Link>
          </h1>
        </div>
        <ul className='flex flex-col gap-y-4 items-center justify-center mt-5'>
        {Navlinks.map((navlink:any)=>{
                return (
                    <li key={navlink.id} onClick={closeSidebar}><Link to = {navlink.path} >{navlink.title}</Link></li>
                )
            })}
        </ul>
        <AiOutlineClose className='absolute top-5 right-5 text-[1.25rem] cursor-pointer' onClick={closeSidebar}/>
    </div>
  )
}

export default Sidebar
