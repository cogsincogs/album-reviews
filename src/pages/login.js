import { NavLink } from 'react-router-dom'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export default function Login() {
    return (
        <Flex bg='white' align='center' justify='center' w="100%" h="100vh">
            <Flex border='3px' borderStyle='solid' borderColor='gray.400' borderRadius={25} align='center' justify='center' direction='column' m={5} w="70%" h="70vh" bg='gray.200'>
                <Heading>Hello!</Heading>
                <Text>
                    This is a demonstration of a login page. It uses an API coded in Express.js, as well 
                    as MongoDB, OAuth2.0, NodeJS, and React. The project also makes use of docker containers. 
                    Code for this and other ongoing projects are available on my GitHub page.
                </Text>
                <span></span>
                <Text>
                    Once you have logged in using your Google account, you will be able to see when you last 
                    logged in (if you have logged in before), the number of times you've logged in, and you 
                    can leave yourself some notes which will be available to you on your next login. This is 
                    to demonstrate user authentication and the REST API.
                </Text>
                <Text><NavLink className="login" to="http://localhost:8080/auth/google">Login with Google</NavLink></Text>
            </Flex>
        </Flex>
    )
}