import { Container,Box, Heading,Image } from "@chakra-ui/react"
import Spline from '@splinetool/react-spline';
import Link from 'next/link'
import styled from "styled-components";
import theme from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from "../components/paragraph";
import { BioSection,BioYear } from "../components/bio";

const profileimage="/images/Profile Image.png  "

const Page = () => {
    return (
      
    <Container>
     <Link href="/n" scroll={false}>
      <Box borderRadius="lg" mb="6" p={3}  
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <Heading size="24" textColor="#8052ff">“As in everything, nature is the best instructor” - Adolf</Heading>  
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
      <Box borderRadius="lg" mb="6" p={2} align="center">
      <Section delay={0.2}>  
 <Paragraph>Jai is a Canada Based Full Stack Developer proficient in implementing Websites, WebAPI's, Data Warehousing and Machine Learning.</Paragraph>
</Section> 
<Section delay={0.5}><Box flexShrink={0} borderRadius="md" mb="6" p={3} align="center" textColor="#8052ff">
<Heading textColor="#8052ff">Timeline</Heading><br></br>
<BioSection>
  <BioYear>
    1999
  </BioYear>
  Born in Uttar Pradesh, India
  </BioSection>
  <BioSection>
  <BioYear>
    2016
  </BioYear>
  Graduated High School, India
  </BioSection>
  <BioSection>
  <BioYear>
    2020
  </BioYear>
  Graduated Bachelor's in Computer Science Engineering, India
  </BioSection>
  <BioSection>
  <BioYear>
    2022
  </BioYear>
  Pursuing Advanced Graduate in Software Engineering Technology, Centennial College, Canada
  </BioSection>
</Box>
  <Box flexShrink={0} borderRadius="md" mb="6" p={3} align="center" textColor="#8052ff">
  <Heading textColor="#8052ff" >Proficiency</Heading><Box flexShrink={0} borderRadius="md" mb="6" p={3} align="center" textColor="#8052ff">
Bar Chart
</Box></Box>
<Box flexShrink={0} borderRadius="md" mb="6" p={3} align="center" textColor="#8052ff">
<Heading textColor="#8052ff">Socials</Heading>
  
</Box>


</Section>


</Box>
    </Container>
    )
  }



export default Page
