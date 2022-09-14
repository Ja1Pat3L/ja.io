import Head from 'next/head';
import Navbar from '../navbar';
import Render from '../render'
import { Heading, Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Jai Patel -  Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>
            <Render path={router.asPath}/>
           
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            
        </Box>
    )
}

export default Main