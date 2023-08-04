import { Flex, Textarea, Button } from "@chakra-ui/react"
import { useState } from "react"

export default function TextBox({handler}) {
    const [postContent, setPostContent] = useState("")

    const sendPost = (e, content) => {
        setPostContent("")
        handler(e, content)
    }

    return (
        <Flex align='center' justify='center' w='100%'>
                    <Textarea placeholder='Make a note here' size='xs' resize='none' backgroundColor='white' border='1px solid' borderColor='gray.400' value={postContent} onChange={(e) => setPostContent(e.target.value)} />
                    <Button backgroundColor='white' border='1px solid' borderColor='gray.400' fontSize='14' w='50px' h='30px' m='2' pl='10' pr='10' onClick={(e) => sendPost(e, postContent)}>Post</Button>
        </Flex>
    )    
}