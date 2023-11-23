import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadingSpinner from "../components/loadingspinner"
import fetcher from "../utils/fetcher"

const BACKEND_URL = process.env.NODE_ENV === 'production' 
                                            ? process.env.REACT_APP_BACKEND_URL
                                            : process.env.REACT_APP_BACKEND_URL_DEV

export default function ProtectedRoutes() {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        // This is to determine whether to go to protected route or not
        async function getUser() {
            // get user and check if logged in. return user && user.loggedIn
            const response = await fetcher(BACKEND_URL + '/user_data', {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let result = await response.json()
            setLoading(false)
            setUser(result)
        }
        getUser()
    }, [])

    if (loading) return <LoadingSpinner />

    return user ? <Outlet /> : <Navigate to="/" />
}