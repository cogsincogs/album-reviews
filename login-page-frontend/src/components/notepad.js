import { Flex } from "@chakra-ui/react";
import Post from "./post";
import TextBox from "./textbox";
import { useEffect, useState } from "react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export default function Notepad({user}) {
    const [postsArray, setPostsArray] = useState([])

    const id = user.id

    useEffect(() => {
        getPostsArray()
    }, [])

    // This is to get the array of user's posts
    async function getPostsArray() {
        const response = await fetch(BACKEND_URL + '/posts/' + id, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let result = await response.json()
        let currentPostsArray = [...postsArray]
        currentPostsArray = result
        setPostsArray(currentPostsArray)
    }

    const handleSendPost = async (e, postContent) => {
        e.preventDefault()
        
        await fetch(BACKEND_URL + '/posts/' + id, {
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

    const handleDeletePost = async (e, postIndex) => {
        e.preventDefault()

        await fetch(BACKEND_URL + '/posts/' + id, {
            method: "DELETE",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postIndex: postIndex
            })
        }).catch(e => console.log(e))

        getPostsArray()
    }

    const handleEditPost = async (e, postIndex, postContent) => {
        e.preventDefault()

        await fetch(BACKEND_URL + '/posts/' + id, {
            method: "PATCH",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postIndex: postIndex,
                content: postContent
            })
        }).catch(e => console.log(e))

        getPostsArray()
    }

    return (
        <>
            <Flex direction='column' align='center' justify='center' w='100%'>
                <TextBox userId={id} handler={handleSendPost} />
                <Flex direction="column" w='100%' maxH={480} overflowY='auto'>
                    <Flex direction='column-reverse' align='flex-start' justify='flex-start' w="100%">
                        {
                            postsArray.map((post, index) => {
                                return <Post key={post.date} index={index} userId={id} date={post.date} content={post.content} deleteHandler={handleDeletePost} editHandler={handleEditPost} />
                            })
                        }
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}