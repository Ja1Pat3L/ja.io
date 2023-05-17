import {
    Container,
    Badge,
    
    List,
    ListItem,
    Heading,Box,
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
            FimiMall <Badge>2022</Badge>
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
        

      </Container><Footer/>
    </Layout>
  )
  export default Project