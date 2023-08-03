import { Text, Textarea } from "@chakra-ui/react";

export default function Notepad() {
    return (
        <>
            <Textarea placeholder='Make a note here' size='sm' resize='none' backgroundColor='white' border='1px solid' borderColor='gray.300' />
        </>
    )
}