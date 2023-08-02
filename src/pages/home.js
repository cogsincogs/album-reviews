import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BorderBox from '../layouts/borderbox'
import { Flex, Heading, Text } from '@chakra-ui/react'
import LoadingSpinner from '../components/loadingspinner'

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

    if (loading) return <LoadingSpinner />

    const username = user.username;
    const loginCount = user.loginCount;
    const lastLogin = user.lastLogin ? new Date(user.lastLogin) : false
    const formattedDate = lastLogin ? lastLogin.toLocaleDateString() : false
    const formattedTime = lastLogin ? lastLogin.toLocaleTimeString() : false

    return (
        <BorderBox>
            <Heading>Hello {username}!</Heading>
            <Flex align='center' justify='space-between' w='100%' direction='row'>
                <Flex align='flex-start' justify='space-between' direction='column' w="50%" m={5}>
                    <Text m={3}>Login count: {loginCount}</Text>
                    {lastLogin
                        ? <Text m={3}>Last login date: {formattedDate} at {formattedTime}</Text>
                        : <Text m={3}>Welcome!</Text>}
                </Flex>
                <Flex align='flex-start' justify='center' direction='column' w='50%' m={5}>
                    <Text>Posts</Text>
                </Flex>
            </Flex>
            <NavLink className="home" to="http://localhost:8080/logout">Logout</NavLink>
        </BorderBox>
        
    )
}