import Head from 'next/head';
import Navbar from '../navbar';
import Render from '../render'
import { Box } from '@chakra-ui/react'

const Main = ({  router }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Jai Patel -  Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>
            
            <Render/>
            
            
        </Box>
    )
}

export default Main