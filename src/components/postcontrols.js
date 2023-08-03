import { Flex, Link } from "@chakra-ui/react";

export default function PostControls() {
    return (
        <>
            <Flex>
                <Link fontSize='11' m={0.5}>Edit</Link>
                <Link fontSize='11' m={0.5}>Delete</Link>
            </Flex>
        </>
    )
}