import { Flex } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function DefaultLayout({ children }) {
    return (
        <>
            <Flex direction="column" minH="100vh">
                <Navbar />
                <Flex align='center' justify='center' w="100%">
                    {children}
                </Flex>
                <div style={{marginTop: "auto"}}>
                    <Footer />
                </div>
            </Flex>
        </>
    )
}