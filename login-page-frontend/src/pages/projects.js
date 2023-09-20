import { Flex, Link, ListItem, Heading, UnorderedList } from "@chakra-ui/react"
import DefaultLayout from "../layouts/DefaultLayout"
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function ProjectsPage() {
    return (
        <>
            <DefaultLayout>
                <Flex direction="column" m={5} alignItems="center">
                    <Heading m={5}>Projects</Heading>
                    <UnorderedList listStyleType="none">
                        <ListItem><Link href="/projects/login-page" color="blue.500">Login Page Project</Link> - <Link href="https://github.com/jamiethomas1/login-page" color="blue.500" isExternal>GitHub Repo <ExternalLinkIcon mb="1"/></Link></ListItem>
                    </UnorderedList>
                </Flex>
            </DefaultLayout>
        </>
    )
}