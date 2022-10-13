import {
    Container,
    Badge,
    Link,
    List,
    Button,
    ListItem,
    Heading,Box
  } from '@chakra-ui/react'
  import { Title, Meta ,WorkImage} from '../../components/projects'
  import Paragraph from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import LinkItem from 'next/link'
import Section from "../../components/section"
  
const document="https://drive.google.com/file/d/1oVCLXBRQALTzFY8hBzb2uEhwl1Mt26vp/view?usp=sharing"

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
          BI Reporting <Badge>2022</Badge>
        </Title>
        <Paragraph>
          Using Microsoft Sql Server Management studio to handle World Wide Importers Database and accessing it in PowerBI for visualization using BI tools.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem textColor='#8052ff'>
            <Meta>Platform</Meta>
            <span>PowerBI</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>PowerBI/SSMS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/bi.png"/>
        


        <Box mb={6}mt={6} align='center'>
<Button as={Link} href={document} colorScheme='purple' variant='solid'>Documentation</Button>
</Box>
   
   
   
      </Container>
    </Layout>
  )
  export default Project