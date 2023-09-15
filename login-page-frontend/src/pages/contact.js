import { Flex, Heading, Link } from "@chakra-ui/react"
import DefaultLayout from "../layouts/DefaultLayout"

export default function ContactPage() {
    return (
        <>
            <DefaultLayout>
                <Flex direction="column" m="5">
                    <Heading m="5" textAlign="center">Contact</Heading>
                    <Link href="#" color="blue.500">My CV (to be added)</Link>
                    <Link href="mailto:jamiewthomas13@gmail.com" color="blue.500">Click here to send me an email</Link>
                    <Link href="https://www.linkedin.com/in/jamie-thomas-88b318198/" color="blue.500">My LinkedIn</Link>
                    <Link href="https://github.com/cogsincogs" color="blue.500">My GitHub</Link>
                </Flex>
            </DefaultLayout>
        </>
    )
}