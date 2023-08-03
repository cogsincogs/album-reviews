import { Text, Divider } from "@chakra-ui/react";
import PostDate from "./postdate";
import PostControls from "./postcontrols";

export default function Post({date, content}) {

    return (
        <>
            <Divider borderColor='gray.500' mt='5px' mb='5px'/>
            <PostDate date={date} />
            <Text fontSize='14'>{content}</Text>
            <PostControls />
        </>
    )
}