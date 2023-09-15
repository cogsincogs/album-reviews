import { Flex, Link, ListItem, Heading, UnorderedList } from "@chakra-ui/react"
import DefaultLayout from "../layouts/DefaultLayout"

export default function ProjectsPage() {
    return (
        <>
            <DefaultLayout>
                <Flex direction="column" m={5}>
                    <Heading m={5}>Projects</Heading>
                    <UnorderedList>
                        <ListItem><Link href="/projects/login-page">Login Page Project</Link> - <Link href="https://github.com/cogsincogs/login-page">GitHub Repo</Link></ListItem>
                    </UnorderedList>
                </Flex>
            </DefaultLayout>
        </>
    )
}