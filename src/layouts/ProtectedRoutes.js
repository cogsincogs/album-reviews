import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

export default function ProtectedRoutes() {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        // This is to determine whether to go to protected route or not
        async function getUser() {
            // get user and check if logged in. return user && user.loggedIn
            const response = await fetch('http://localhost:8080/user_data', {
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

    if (loading) return <span>Loading</span>

    return user ? <Outlet /> : <Navigate to="/" />
}