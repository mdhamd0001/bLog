import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function Proctection() {
    const auth=localStorage.getItem("token")
  return auth&&auth!=null?<Outlet></Outlet>:<Navigate to={"/signin"}></Navigate>;
}

export default Proctection
