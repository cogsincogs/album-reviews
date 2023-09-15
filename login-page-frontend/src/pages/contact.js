import { Flex, Heading, Link } from "@chakra-ui/react"
import DefaultLayout from "../layouts/DefaultLayout"

export default function ContactPage() {
    return (
        <>
            <DefaultLayout>
                <Flex direction="column" m={5}>
                    <Heading m={5}>Contact</Heading>
                    <Link href="#">My CV (to be added)</Link>
                    <Link href="mailto:jamiewthomas13@gmail.com">Click here to send me an email</Link>
                    <Link href="https://www.linkedin.com/in/jamie-thomas-88b318198/">My LinkedIn</Link>
                    <Link href="https://github.com/cogsincogs">My GitHub</Link>
                </Flex>
            </DefaultLayout>
        </>
    )
}