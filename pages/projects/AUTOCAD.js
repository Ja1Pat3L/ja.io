import {
    Container,
    Badge,
    
    List,
    ListItem,
    Heading,Box,Button
  } from '@chakra-ui/react'
  import { Title, Meta } from '../../components/projects'
  import Paragraph from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import LinkItem from 'next/link'
import Section from "../../components/section"
import Footer from '../../components/footer'
  
  const Project = () => (
    <Layout title="NextJs">
      <Container>
      <Section delay={0.1}>
     <LinkItem href="/projects" path='../pages/projects.js' scroll={false}>
      <Box borderRadius="lg" mb="6" p={3}  
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <Heading align ="center" size="24" textColor="#8052ff">All Projects</Heading>  
      </Box>
      </LinkItem>
      </Section>
        <Title>
          Tractebel Engineering <Badge>2019-2020</Badge>
        </Title>
        <Paragraph>
        Hands on experience in a real time Gas Pipeline Project from a Belgium based
company that is Tractebel Engineering. Worked along with my father who is a
senior engineer and is working in the conglomerate since 2002, building sketches using AutoCAD and worked on tools side by side. Certified. P.S- Files available soon
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>AUTOCAD Engineering</span>
          </ListItem>
        </List>

        <Box align='center'>
<Button mt={4} colorScheme='purple' variant='solid'>Certificate</Button>
</Box>
      </Container><Footer/>
    </Layout>
  )
  export default Project