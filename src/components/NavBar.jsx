import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
function NavBar(){
  const [open,setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(()=>{
    //function to check if click happened out side the manubox
    function handleClick(event){
      if(menuRef.current && !menuRef.current.contains(event.target)){
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown",handleClick);

      //cleaner function
      return(()=>
      {
        document.removeEventListener("pointerdown",handleClick);
      }
      )
  },[])
  
    return(
        <nav className="flex justify-between items-center px-4 sm:px-8 py-4 sticky top-0
        bg-blue-300 opacity-100 z-2 shadow-lg shadow-gray-400 rounded-b-2xl">
        <h1 className="text-2xl font-bold text-indigo-600">ShopSphere</h1>
        <div className='hidden sm:flex justify-between gap-2.5'>
        <Link
          to ="/products" className="nav-link">
          Shop Now
        </Link>
        <Link to="/login" className="nav-link">Log In</Link>
        <Link to="/signUp" className="nav-link">Sign Up</Link>
        </div>
        <button className={`sm:hidden font--black ${open?'hidden':null}`} onClick={()=>setOpen(!open)}><HiOutlineMenuAlt3 size={30}/></button>
        {open && (
        <div
          className="bg-blue-300 absolute top-1 right-1 sm:bg-cyan-300/20 backdrop-blur-2xl shadow-lg rounded-xl p-4 flex flex-col
            gap-3 w-44  sm:hidden
          " ref={menuRef}>
          <Link
            to="/products"
            className="nav-link"
          >
            Shop Now
          </Link>

          <Link
            to="/login"
            className="nav-link"
          >
            Log In
          </Link>

          <Link
            to="/signUp"
            className="nav-link"
          >
            Sign Up
          </Link>
        </div>
      )}
      </nav>
    )
} export default NavBar;