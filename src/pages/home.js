import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BorderBox from '../layouts/borderbox'
import { Heading } from '@chakra-ui/react'

export default function Home() {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

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

    return (
        <BorderBox>
            <Heading>Hello {username}!</Heading>
            <NavLink className="home" to="http://localhost:8080/logout">Logout</NavLink>
        </BorderBox>
        
    )
}