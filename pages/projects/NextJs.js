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
import Footer from '../../components/footer';  

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
          ja-io <Badge>2022-</Badge>
        </Title>
        <Paragraph>
        A three-dimensional website made using Next.js, Spline 3D, three.js, Chakra-UI, and Framer Motion. Working on rendering a responsive, animated chart using Chart.js.  
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ja-io.vercel.app">
            https://ja-io.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Ja1Pat3L/ja.io">
            https://github.com/Ja1Pat3L/ja.io <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>NextJs Portfolio Website</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>Next.js-Spline3D-Chart.js-Chakra.js-React-Three.js</span>
          </ListItem>
      

        </List>
      </Container>  <Footer/>
    </Layout>
  )
  export default Project