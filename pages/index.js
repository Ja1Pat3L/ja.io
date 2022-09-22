import { Container,Box, Heading } from "@chakra-ui/react"
import LinkItem from 'next/link'

const Page = () => {
    return (
      
    <Container>
     <LinkItem href="/about" path='../pages/about.js' scroll={false}>
      <Box borderRadius="lg" mb="6" p={3}  
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <Heading align ="center" size="24" textColor="#8052ff">About Me</Heading>  
      </Box>
      </LinkItem>
    </Container>
    )
  }



export default Page
