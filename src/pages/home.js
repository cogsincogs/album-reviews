import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BorderBox from '../layouts/borderbox'
import { Heading, Text } from '@chakra-ui/react'

export default function Home() {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        // This is to get information about the user
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
            setUser(result.user)
        }
        getUser()
    }, [])

    if (loading) return <span>Loading</span>

    const username = user.username;
    const loginCount = user.loginCount;
    const lastLogin = new Date(user.lastLogin)
    const formattedDate = lastLogin.toLocaleDateString()
    const formattedTime = lastLogin.toLocaleTimeString()

    return (
        <BorderBox>
            <Heading>Hello {username}!</Heading>
            <Text>Login count: {loginCount}</Text>
            {lastLogin
                ? <Text>Last login date: {formattedDate} at {formattedTime}</Text>
                : <Text>Welcome!</Text>}
            <NavLink className="home" to="http://localhost:8080/logout">Logout</NavLink>
        </BorderBox>
        
    )
}