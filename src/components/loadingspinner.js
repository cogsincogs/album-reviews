import { Flex, Spinner } from '@chakra-ui/react'

export default function LoadingSpinner() {
  return (
    <Flex bg='white' align='center' justify='center' w="100%" h="100vh">
        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    </Flex>
  )
}