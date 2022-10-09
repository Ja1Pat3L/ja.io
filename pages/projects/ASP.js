import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio,Heading,Box
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
          code.NET <Badge>2022</Badge>
        </Title>
        <Paragraph>
        Code.NET is a multipurpose managed web API built on ASP.NET ReSTful WebAPI using C# and Amazon Web Services. 
        The API can read, create, update, and delete Client and Tutorial Information. The API also provides 
        Tutorial Comments Section and Client Tutorial Section where Clients can perform read, create and delete based on Tutorials.
        The API is available for use in any video or tutorial streaming platform. API managed through Google APIGEE Services.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>APIGEE</Meta>
            <Link href="http://34.149.94.52.nip.io/swagger/index.html">http://34.149.94.52.nip.io/swagger/index.html <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Beanstalk</Meta>
            <Link href="http://codeapi-dev.us-east-1.elasticbeanstalk.com/">
            http://codeapi-dev.us-east-1.elasticbeanstalk.com/ <ExternalLinkIcon mx="2px" />
            </Link></ListItem>
            <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Ja1Pat3L/codeAPI">https://github.com/Ja1Pat3L/codeAPI<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>ASP WebAPI+WebMVC using AWS and Google APIGEE</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>C#-ASP.NET-Swagger-UI-AWS RDS MS SQL Server 2019-AWS Beanstalk-Google APIGEE</span>
          </ListItem>
         
        </List>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/KJJ8F2tCpMo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </AspectRatio>
      </Container>  <Footer/>
    </Layout>
  )
  export default Project