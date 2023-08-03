'use client'

import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from '@chakra-ui/react'
import styles from './ui/googlebutton.module.css'

export default function GoogleButton() {
  return (
    <Center p={8}>
      <Button className={styles.button} border='1px solid' borderColor='gray.300' w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
  )
}