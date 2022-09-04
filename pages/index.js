import { Container,Box, Heading } from "@chakra-ui/react"
import Spline from '@splinetool/react-spline';
import Link from 'next/link'
import styled from "styled-components";
import theme from "@chakra-ui/react";

const Page = () => {
    return (
      
    <Container>
     <Link href="/n" scroll={false}>
      <Box borderRadius="lg" bg ="red" mb="6" p={3} align="center" >
      Know More About Me !!
      </Box></Link>
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
           <p> “As in everything, nature is the best instructor” - Adolf Hitler 
          </p>
        </Box>


      </Box>
    </Container>
    )
  }



export default Page
