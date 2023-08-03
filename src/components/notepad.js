import { Text, Flex, Textarea } from "@chakra-ui/react";
import Post from "./post";

export default function Notepad() {
    return (
        <>
            <Flex direction='column' align='center' justify='center' w='100%'>
                <Textarea placeholder='Make a note here' size='xs' resize='none' backgroundColor='white' border='1px solid' borderColor='gray.400' />
                <Flex direction='column' align='flex-start' justify='flex-start' w='100%' maxH='40vh' overflowY='scroll'>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Flex>
            </Flex>
        </>
    )
}