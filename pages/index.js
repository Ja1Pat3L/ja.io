import { Container,Box, Heading } from "@chakra-ui/react"
import LinkItem from 'next/link'
import Section from "../components/section"

const Page = () => {
    return (
      
    <Container>
      <Section delay={0.1}>
     <LinkItem href="/projects" path='../pages/projects.js' scroll={false}>
      <Box borderRadius="lg" mb="6" p={3}  
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <Heading align ="center" size="24" textColor="#8052ff">Coming Soon...</Heading>  
      </Box>
      </LinkItem>
      </Section>
    </Container>
    )
  }



export default Page
