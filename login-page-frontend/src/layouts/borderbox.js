import { Flex } from "@chakra-ui/react";

export default function BorderBox({children}) {
    return (
        <Flex bg='white' align='center' justify='center' w="100%" h="100vh">
            <Flex border='3px' borderStyle='solid' borderColor='gray.400' borderRadius={25} align='center' justify='space-around' direction='column' m={5} w={1400} h={700} bg='gray.200'>
                {children}
            </Flex>
        </Flex>
    )
}