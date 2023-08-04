import { Flex } from "@chakra-ui/react";
import Post from "./post";
import TextBox from "./textbox";
import { useEffect, useState } from "react";

export default function Notepad({user}) {
    const [postsArray, setPostsArray] = useState([])

    const id = user.id

    useEffect(() => {
        getPostsArray()
    }, [])

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

    const handleSendPost = async (e, postContent) => {
        e.preventDefault()
        
        await fetch('http://localhost:8080/posts/' + id, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: postContent
            })
        }).catch(e => console.log(e))

        getPostsArray()
    }

    return (
        <>
            <Flex direction='column' align='center' justify='center' w='100%'>
                <TextBox userId={id} handler={handleSendPost} />
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