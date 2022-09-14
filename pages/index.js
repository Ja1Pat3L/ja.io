import { Container,Box, Heading } from "@chakra-ui/react"
import Spline from '@splinetool/react-spline';
import Link from 'next/link'
import styled from "styled-components";
import theme from "@chakra-ui/react";

const Page = () => {
    return (
      
    <Container>
     <Link href="/n" scroll={false}>
      <Box borderRadius="lg" mb="6" p={3} align="center" 
      textColor="#8052ff"
      variant="outline"
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
      Know More About Me !!
      </Box>
      </Link>
      <Box display={{md: 'flex'}} color={'#8052ff'}>
        <Box flexGrow={1}>
           <p> “As in everything, nature is the best instructor” - Adolf Hitler 
          </p>
        </Box>
      </Box>
    </Container>
    )
  }



export default Page
