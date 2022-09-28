import Head from 'next/head';
import Navbar from '../navbar';
import Render from '../render'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-ssr';
const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Jai Patel -  Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>
            <NoSsr>
            <Render/>
            </NoSsr>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            
        </Box>
    )
}

export default Main