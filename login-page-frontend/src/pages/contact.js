import { Flex, Heading, Link } from "@chakra-ui/react"
import DefaultLayout from "../layouts/DefaultLayout"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { FaRegFilePdf } from 'react-icons/fa6'

export default function ContactPage() {
    return (
        <>
            <DefaultLayout>
                <Flex direction="column" m="5">
                    <Heading m="5" textAlign="center">Contact</Heading>
                    <br/>
                    <Link href="#" color="blue.500" isExternal>My CV (to be added) <ExternalLinkIcon mb="1" /></Link>
                    <br/>
                    <Link href="mailto:jamiewthomas13@gmail.com" color="blue.500">Click here to send me an email</Link>
                    <br/>
                    <Link href="https://www.linkedin.com/in/jamie-thomas-88b318198/" color="blue.500" isExternal>My LinkedIn <ExternalLinkIcon mb="1"/></Link>
                    <br/>
                    <Link href="https://github.com/jamiethomas1" color="blue.500" isExternal>My GitHub <ExternalLinkIcon mb="1" /></Link>
                </Flex>
            </DefaultLayout>
        </>
    )
}