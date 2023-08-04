import { Text, Divider, Flex } from "@chakra-ui/react";
import PostDate from "./postdate";
import PostControls from "./postcontrols";

export default function Post({index, date, content, deleteHandler, editHandler}) {

    return (
        <Flex direction='column' w='100%'>
            <Divider borderColor='gray.500' mt='5px' mb='5px'/>
            <PostDate date={date} />
            <Text fontSize='14'>{content}</Text>
            <PostControls index={index} deleteHandler={deleteHandler} editHandler={editHandler} />
        </Flex>
    )
}