import { Heading, Flex } from "@chakra-ui/react"
import DefaultLayout from "../layouts/DefaultLayout"

export default function AboutPage() {
    return (
        <>
            <DefaultLayout>
                <Flex direction="column" m={5}>
                    <Heading m={5}>About</Heading>
                </Flex>
            </DefaultLayout>
        </>
    )
}