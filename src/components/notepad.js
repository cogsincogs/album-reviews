import { Text, Flex, Textarea, Button } from "@chakra-ui/react";
import Post from "./post";
import { useEffect, useState } from "react";

export default function Notepad({user}) {
    const [postsArray, setPostsArray] = useState([])

    const id = user.id

    useEffect(() => {
        // This is to get the array of user's posts
        async function getPostsArray() {
            const response = await fetch('http://localhost:8080/posts/' + id, {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let posts = await response.json()
            let result = posts.reverse()
            setPostsArray(result)
        }
        getPostsArray()
    }, [])

    console.log(postsArray)

    return (
        <>
            <Flex direction='column' align='center' justify='center' w='100%'>
                <Flex align='center' justify='center' w='100%'>
                    <Textarea placeholder='Make a note here' size='xs' resize='none' backgroundColor='white' border='1px solid' borderColor='gray.400' />
                    <Button backgroundColor='white' border='1px solid' borderColor='gray.400' fontSize='14' w='50px' h='30px' m='2' pl='10' pr='10'>Post</Button>
                </Flex>
                <Flex direction='column' align='flex-start' justify='flex-start' w='100%' maxH='40vh' overflowY='auto'>
                    {
                        postsArray.map((post, index) => {
                            return <Post key={index} date={post.date} content={post.content} />
                        })
                    }
                </Flex>
            </Flex>
        </>
    )
}