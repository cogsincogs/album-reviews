import { Heading, Flex, Text, UnorderedList, ListItem, Box } from "@chakra-ui/react"
import DefaultLayout from "../layouts/DefaultLayout"

export default function AboutPage() {
    return (
        <>
            <DefaultLayout>
                <Flex direction="column" m="5">
                    <Heading m="5" textAlign="center">About</Heading>
                    <Box ml="25%" mr="25%" fontSize="0.9em">
                        <Text>
                            My name is Jamie Thomas, I am a web developer with a focus on 
                            backend development. I recently left London South Bank University with a 
                            first in Politics, and I have been coding as a hobby for around 10 years.
                        </Text>
                        <br />
                        <Text>
                            Recently, I have been working on a project that implements an OAuth2.0 
                            login page using Google accounts. This project is written in Javascript. 
                            The frontend uses NodeJS and React, and the backend is a REST API using 
                            ExpressJS making calls to an online MongoDB database. Both the frontend 
                            and backend are running inside Docker containers which are deployed to an 
                            AWS Fargate instance using the ECR. I am using Route 53 and an EC2 load 
                            balancer to point my URL to the ECS service this site is running on. I 
                            have also configured GitHub Actions to redeploy the images whenever a 
                            branch is merged into main.
                        </Text>
                        <br />
                        <Text>
                            I have experience in languages other than Javascript, ranging from PHP 
                            that you will see in some of my other GitHub repos, to Java and C++ which 
                            I took an interest in while growing up.
                        </Text>
                        <br />
                        <Text>
                            I am currently looking for a role as a backend web developer, however I am 
                            open to frontend roles as I am ultimately aiming to expand my skillset to 
                            full-stack.
                        </Text>
                        <br />
                        <Text>
                            Outside of web development, I'm a big prog rock fan, I enjoy reading about 
                            history, and learning 
                            languages.
                        </Text>
                    </Box>
                    <Heading as="h3" size="md" textAlign="center" m="3">My technical skills</Heading>
                    <UnorderedList ml="25%" mr="25%" fontSize="0.9em">
                        <ListItem>
                            Experience with many languages: Javascript, PHP, Python, Java, C++, 
                            SQL, C#
                        </ListItem>
                        <ListItem>ReactJS/NextJS</ListItem>
                        <ListItem>MySQL, MongoDB</ListItem>
                        <ListItem>REST API</ListItem>
                        <ListItem>OAuth2.0</ListItem>
                        <ListItem>NGINX</ListItem>
                        <ListItem>Docker</ListItem>
                        <ListItem>AWS: ECS, ECR, EC2, Route53, VPC</ListItem>
                        <ListItem>GitHub version control & Actions</ListItem>
                    </UnorderedList>

                    <Heading as="h3" size="md" textAlign="center" m="3">My professional skills</Heading>
                    <UnorderedList ml="25%" mr="25%" fontSize="0.9em">
                        <ListItem>Working to deadlines</ListItem>
                        <ListItem>Problem-solving</ListItem>
                        <ListItem>Flexible, while maintaining enthusiasm and commitment to a project</ListItem>
                        <ListItem>Very proficient with many aspects of technology and computer networking</ListItem>
                        <ListItem>Efficient at picking up new technologies</ListItem>
                        <ListItem>Great oral and written communication skills</ListItem>
                        <ListItem>Eager to help other people and solve their problems</ListItem>
                    </UnorderedList>
                    <br/>
                </Flex>
            </DefaultLayout>
        </>
    )
}