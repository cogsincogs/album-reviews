import { Text, Divider } from "@chakra-ui/react";
import PostDate from "./postdate";
import PostControls from "./postcontrols";

export default function Post() {
    return (
        <>
            <Divider borderColor='gray.500' mt='5px' mb='5px'/>
            <PostDate />
            <Text fontSize='14'>This is an example post.</Text>
            <PostControls />
        </>
    )
}