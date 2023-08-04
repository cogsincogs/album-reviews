import { Flex, Link } from "@chakra-ui/react";

export default function PostControls({index, deleteHandler, editHandler}) {

    const editPost = async (e, index) => {
        const content = "test" // This is temporary, open a modal and ask user for input
        editHandler(e, index, content)
    }

    return (
        <>
            <Flex>
                <Link fontSize='11' m={0.5} ml={0} onClick={(e) => editPost(e, index)}>Edit</Link>
                <Link fontSize='11' m={0.5} onClick={(e) => deleteHandler(e, index)}>Delete</Link>
            </Flex>
        </>
    )
}