import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navber = () => {

  const navigate = useNavigate()
  const [scrolled, setScrolled] = React.useState(false);
  // bg change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [open, setOpen] = React.useState(false)

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md bg-green/10 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 relative transition-all transition `}>

      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className='h-9' src={assets.logo} alt="" />
      </NavLink>

      {/* Desktop Menu */}
      <div className='hidden sm:flex items-center gap-8'>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/products' >All Product</NavLink>
        <NavLink to='/about' >About</NavLink>
        <NavLink to='/contact' >Contact</NavLink>
        <NavLink to='/search' >
          <input type="text" placeholder='Search' className='px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green' />
        </NavLink>
        <NavLink to='/cart' >
          <img className='w-6' src={assets.cart_icon} alt="" />
        </NavLink>
        <NavLink to='/login' className='bg-primary text-white px-8 py-2 rounded-full'>Login</NavLink>
      </div>



      {/* Hamburger Menu */}
      <div className='flex items-center gap-6 sm:hidden'>
        <div className="relative cursor-pointer">

          <img onClick={() => navigate("/cart")} src={assets.cart_icon} alt="cart" className='w-6 opacity-80' />

          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">0</button>

        </div>
        <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="cursor-pointer focus:outline-none">

          {/* Menu Icon SVG */}

          <img src={assets.menu_icon} alt="menu" />

        </button>
      </div>
      {/* Mobile Menu */}

      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>

        <NavLink to='/' onClick={() => setOpen(false)} className='hover:bg-gray-100 w-full rounded px-4 py-2'>Home</NavLink>
        <NavLink to='/products' onClick={() => setOpen(false)} className='hover:bg-gray-100 w-full rounded px-4 py-2'>All Product</NavLink>
        <NavLink to='/products' onClick={() => setOpen(false)} className='hover:bg-gray-100 w-full rounded px-4 py-2'>My Orders</NavLink>
        <NavLink to='/about' onClick={() => setOpen(false)} className='hover:bg-gray-100 w-full rounded px-4 py-2'>About Us</NavLink>
        <NavLink to='/contact' onClick={() => setOpen(false)} className='hover:bg-gray-100 w-full rounded px-4 py-2'>Contact</NavLink>

        <button onClick={() => {
          setOpen(false);
          setShowUserLogin(true);
        }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">

          Login

        </button>



      </div>

    </nav>
  )
}

export default Navber
