import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BorderBox from '../layouts/borderbox'
import { Button, Flex, Heading, Text } from '@chakra-ui/react'
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
            <Flex align="center" justify="flex-start" direction="column" w="100%" h="100%">
                {loginCount > 1
                    ? <Heading m={5}>Welcome back, {firstname}!</Heading>
                    : <Heading>Hello {firstname}!</Heading>}
                <Flex align='flex-start' justify='space-between' w='100%' direction='row'>
                    <Flex direction="column" align="flex-start" justify="space-between" w="50%" h="100%">
                        <Flex align='flex-start' justify='space-between' direction='column' m={5}>
                            <Text m={3}>Login count: {loginCount}</Text>
                            {lastLogin
                                ? <Text m={3}>Your previous successful login was on {formattedLLDate} at {formattedLLTime}.</Text>
                                : <Text m={3}>Welcome!</Text>}
                        </Flex>
                        <Flex direction="row" justify="center" m={5}>
                            <NavLink className="home" to="http://localhost:8080/logout"><Button border="1px solid" borderColor="gray.400" backgroundColor="red.500" m={3} color="gray.100">Log out</Button></NavLink>
                        </Flex>
                    </Flex>
                    <Flex align='flex-start' justify='flex-start' direction='column' w='50%' m={5}>
                        <Notepad user={user} />
                    </Flex>
                </Flex>
            </Flex>
        </BorderBox>
        
    )
}