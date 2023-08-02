import { Text, Textarea } from "@chakra-ui/react";

export default function Notepad() {
    return (
        <>
            <Textarea placeholder='Make a note here' size='sm' resize='none' />
        </>
    )
}