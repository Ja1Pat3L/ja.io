import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,Box
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/projects'
  import Paragraph from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import LinkItem from 'next/link'
import Section from "../../components/section"
import Footer from '../../components/footer'
  
  const Project = () => (
    <Layout title="others">
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
            Python API <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Generating pkl files from model of dataset and regression. Using files for Flask Api and html for Frontend.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://ja-io.vercel.app">
            https://ja-io.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>Python Machine Learning API</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>Python</span>
          </ListItem>

        </List>

      </Container><Footer/>
    </Layout>
  )
  export default Project