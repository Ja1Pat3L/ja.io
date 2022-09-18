import { Container,Box, Heading,Image } from "@chakra-ui/react"
import Spline from '@splinetool/react-spline';
import Link from 'next/link'
import styled from "styled-components";
import theme from "@chakra-ui/react";

const profileimage="/images/pp.png  "

const Page = () => {
    return (
      
    <Container>
     <Link href="/n" scroll={false}>
      <Box borderRadius="lg" mb="6" p={3} align="center" 
      textColor="#8052ff"
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <p>“As in everything, nature is the best instructor” - Adolf</p>  
      </Box>
      </Link>
        <br></br> 
        <Box
        flexShrink={0}
        mt={{base:4,md:0}}
        ml={{md:6}}
        align="center"
        >
          <Image borderColor="violet" borderWidth={2} borderderStyle="solid" maxWidth="100px" display="inine-block" borderRadius="full"
          src={profileimage} alt="Pic"
          /> <br></br>
          <Heading textColor="#8052ff">About Me</Heading>
          <br></br>
      </Box>
      <Box borderRadius="lg" mb="6" p={3} align="center" 
      textColor="#8052ff">
         
 <p>Jai is a Canada Based Full Stack Developer proficient in building Websites and WebAPI's.</p> <br></br>
 <Heading textColor="#8052ff">Bio</Heading>
          <br></br>
 <p>
  Origins from India, Jai achieved his bachelor's degree in Computer Science Engineering and graduated in 2021. 
  To further progress in the field, Canada was the chosen destination to learn, achieve and grow.
  Currently pursuing Advanced Graduate Software Engineering Technology from Centennial College</p>  
      </Box>
    </Container>
    )
  }



export default Page
