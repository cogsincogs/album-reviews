import { Text } from "@chakra-ui/react";

export default function PostDate({date}) {

    // Multiply PHP timestamp by 1000 as Javascript counts in milliseconds
    const timestamp = new Date(date * 1000)
    const postTime = timestamp.toLocaleTimeString()
    const postDate = timestamp.toLocaleDateString()

    return (
        <>
            <Text fontSize='11'>{postTime} - {postDate}</Text>
        </>
    )
}