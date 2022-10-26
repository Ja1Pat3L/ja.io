import Head from 'next/head';
import Navbar from '../navbar';

import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic';

const Render=dynamic(()=>import('../render'),{
    ssr:false,
})

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Jai Patel -  Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>
            
            <Render/>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            
        </Box>
    )
}

export default Main