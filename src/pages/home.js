import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BorderBox from '../layouts/borderbox'
import { Flex, Heading, Text } from '@chakra-ui/react'
import LoadingSpinner from '../components/loadingspinner'
import Notepad from '../components/notepad'

export default function Home() {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)
        getUser().then(() => setLoading(false))
    }, [])

    // This is to get information about the user
    async function getUser() {
        const response = await fetch('http://localhost:8080/user_data', {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let result = await response.json()
        setUser(result.user)
    }

    if (loading) return <LoadingSpinner />

    const firstname = user.firstname;
    const loginCount = user.loginCount;

    const lastLogin = user.lastLogin ? new Date(user.lastLogin) : false
    const formattedLLDate = lastLogin ? lastLogin.toLocaleDateString() : false
    const formattedLLTime = lastLogin ? lastLogin.toLocaleTimeString() : false

    return (
        <BorderBox>
            {loginCount > 1
                ? <Heading>Welcome back, {firstname}!</Heading>
                : <Heading>Hello {firstname}!</Heading>}
            <Flex align='center' justify='space-between' w='100%' direction='row'>
                <Flex align='flex-start' justify='space-between' direction='column' w="50%" m={5}>
                    <Text m={3}>Login count: {loginCount}</Text>
                    {lastLogin
                        ? <Text m={3}>Your previous successful login was on {formattedLLDate} at {formattedLLTime}.</Text>
                        : <Text m={3}>Welcome!</Text>}
                </Flex>
                <Flex align='flex-start' justify='center' direction='column' w='50%' m={5}>
                    <Notepad user={user} />
                </Flex>
            </Flex>
            <NavLink className="home" to="http://localhost:8080/logout">Logout</NavLink>
        </BorderBox>
        
    )
}