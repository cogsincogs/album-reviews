import { Flex, Link, useDisclosure } from "@chakra-ui/react";
import EditModal from "./editmodal";

export default function PostControls({index, userId, deleteHandler, editHandler}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex>
                <Link fontSize='11' m={0.5} ml={0} onClick={onOpen}>Edit</Link>
                <Link fontSize='11' m={0.5} onClick={(e) => deleteHandler(e, index)}>Delete</Link>
            </Flex>

            <EditModal index={index} userId={userId} isOpen={isOpen} onClose={onClose} editHandler={editHandler} />
        </>
    )
}