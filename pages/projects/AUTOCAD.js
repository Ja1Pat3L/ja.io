import {
    Container,
    Badge,
    Link,
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
import { ExternalLinkIcon } from '@chakra-ui/icons'
const document="https://drive.google.com/file/d/1HhtV9nj-srct96ICc94hdfgQmSNk6EWJ/view?usp=sharing"

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
            FimiMall <Badge>2022-Present</Badge>
        </Title>
        <Paragraph>
        Retail Application: Built Helm Charts for multiple microservices using Kubernetes and Docker. Developing features for Order and Payment using Java Spring and MongoDB.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>Spring Boot Application </span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>Java Spring-MongoDB-Kubernetes-Docker</span>
          </ListItem>
        </List>
        <Title>
          Tractebel Engineering <Badge>2018-2019</Badge>
        </Title>
        <Paragraph>
        Hands on experience in a real time Gas Pipeline Project from a Belgium based
company that is Tractebel Engineering. Worked along with my father who is a
senior engineer and is working in the conglomerate since 2002, built sketches using AutoCAD and worked on tools side by side. 
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>AUTOCAD Engineering</span>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Source</Meta>
            <Link href="https://drive.google.com/drive/folders/1hUu0vH9Aa1LJBLD7UV4xVkwWS_7g5iB4?usp=sharing">Content Files<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <Box align='center'>
<Button mt={6} as={Link} href={document} colorScheme='purple' variant='solid'>Certification</Button>
</Box>

      </Container><Footer/>
    </Layout>
  )
  export default Project