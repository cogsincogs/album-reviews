import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const BACKEND_URL = process.env.NODE_ENV === 'production' 
                                            ? process.env.REACT_APP_BACKEND_URL
                                            : process.env.REACT_APP_BACKEND_URL_DEV

export default function EditModal({index, userId, isOpen, onClose, editHandler}) {
    const [content, setContent] = useState("")

    useEffect(() => {
        getContent()
    }, [])

    async function getContent() {
        const response = await fetch(BACKEND_URL + `/posts/${userId}?postIndex=${index}`, {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let post = await response.json()
        let result = await post.content
        setContent(result)
    }

    const save = async (e, index, content) => {
        e.preventDefault()
        editHandler(e, index, content)
        onClose(e)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit note</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={(e) => save(e, index, content)}>Save</Button>
                    <Button variant='ghost' onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}