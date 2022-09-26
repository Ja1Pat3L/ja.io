import { Container,Box, Heading,Image } from "@chakra-ui/react"

import Section from '../components/section'
import Paragraph from '../components/paragraph';
import { BioSection,BioYear } from '../components/bio'; 
const profileimage='/images/Profile Image.png'

const Page = () => {
    return (
      
    <Container>
     <Section delay={0.1}>
      <Box borderRadius="lg" mb="45" p={3}  
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <Heading align='center' size="24" textColor="#8052ff">“As in everything, nature is the best instructor” - Adolf</Heading>  
      </Box>
      </Section>
        <br></br> 
        <Box
        flexShrink={0}
        mt={{base:4,md:0}}
        ml={{md:6}}
        align="center"
        >  <Section delay={0.2}>
          <Image maxWidth="100px" display="inine-block"
          src={profileimage} alt="Pic"
          /> <br></br></Section>
          <Section delay={0.2}>
          <Heading textColor="#8052ff">About Me</Heading>
          </Section>
      </Box>
      <Box borderRadius="lg" mb="6" p={3} align="center">
      <Section delay={0.2}>  
 <Paragraph>Jai is a Canada Based Full Stack Developer proficient in implementing Websites, WebAPIs, Data Warehousing and Machine Learning.</Paragraph>
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
  Graduated High School
  </BioSection>
  <BioSection>
  <BioYear>
    2020
  </BioYear>
  Bachelors Computer Science Engineering
  </BioSection>
  <BioSection>
  <BioYear>
    2022
  </BioYear>
  Advanced Graduate Software Engineering Technology 
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
