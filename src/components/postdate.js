import { Text } from "@chakra-ui/react";

export default function PostDate({date}) {

    const timestamp = new Date(date)
    const postTime = timestamp.toLocaleTimeString()
    const postDate = timestamp.toLocaleDateString()

    return (
        <>
            <Text fontSize='11'>{postTime} - {postDate}</Text>
        </>
    )
}