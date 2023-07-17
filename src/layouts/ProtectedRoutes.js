import { Outlet } from "react-router-dom"
import Login from "../pages/login"

function useAuth() {
    // get user and check if logged in. return user && user.loggedIn
    return false
}

export default function ProtectedRoutes() {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Login />
}