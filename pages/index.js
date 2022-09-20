import { Container,Box, Heading,Image } from "@chakra-ui/react"
import Spline from '@splinetool/react-spline';
import Link from 'next/link'
import styled from "styled-components";
import theme from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from "../components/paragraph";

const profileimage="/images/Profile Image.png  "

const Page = () => {
    return (
      
    <Container>
     <Link href="/n" scroll={false}>
      <Box borderRadius="lg" mb="6" p={3}  
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <Paragraph>“As in everything, nature is the best instructor” - Adolf</Paragraph>  
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
          <Section delay={0.1}>
          <Heading textColor="#8052ff">About Me</Heading>
          </Section>
      </Box>
      <Box borderRadius="lg" mb="6" p={3} align="center">
      <Section delay={0.1}>  
 <Paragraph>Jai is a Canada Based Full Stack Developer proficient in building Websites and WebAPI's.</Paragraph> <br></br>
 <Heading textColor="#8052ff">Bio</Heading>
          <br></br>
 <Paragraph>
 Originating from India, Jai achieved his bachelor's degree in Computer Science Engineering and graduated in 2021. 
Currently pursuing Advanced Graduate Software Engineering Technology from Centennial College, Canada, to advance in the field.</Paragraph>  
  </Section> 
</Box>
    </Container>
    )
  }



export default Page
