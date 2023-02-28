import { useContext } from "react"

import { Navigate, Route, Routes } from "react-router-dom"

import Dashboard from "../components/dashboard"
import Login from "../components/login"
import Register from "../components/registro"

import { GlobalContext } from "../contexts/globalcontext"


const RoutesMain = () => {
    const {automaticLogin}: any = useContext(GlobalContext)
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="*" element={<Navigate replace to={'/login'} />} />
        </Routes>
    )
}

export default RoutesMain