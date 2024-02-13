import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navebar() {
  const navigate = useNavigate()

  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
    <a className="font-bold text-xl tracking-tight" href="#">My Site</a>
    <div className="flex items-center">
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#" onClick={()=>navigate('/')}>Home</a>
        <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#" onClick={()=>navigate('/login')}>Login</a>
       <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#" onClick={()=>navigate('/register1')}>Register</a> 
       
    </div>
</nav>
  )
}

export default Navebar