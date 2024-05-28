import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../redux/store.ts";
import Sidebar from './Sidebar'

import {Navlinks} from '../utils/Links.ts'
import { setSidebarOpen } from "../redux/features/toggle/toggleSlice.ts";

const Navbar = () => {
  const {isSidebarOpen} = useSelector((state: RootState) => state.toggle)
  const dispatch = useDispatch()

  return (
    <header className="max-w-screen w-full bg-slate-800 text-slate-50 px-10 py-6">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">
            <Link to="/">Ramailo Ecommerce</Link>
          </h1>
        </div>
        <RxHamburgerMenu className =" text-[1.35rem] md:hidden cursor-pointer" onClick={() => dispatch(setSidebarOpen())}/>
        <ul className=" hidden md:flex justify-between gap-x-8">
            {Navlinks.map((navlink:any)=>{
                return (
                    <li key={navlink.id}><Link to = {navlink.path} >{navlink.title}</Link></li>
                )
            })}
        </ul>
      </nav>
      {isSidebarOpen && <Sidebar />}
    </header>
  );
};

export default Navbar;
