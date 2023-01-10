import {
    Container,
    Badge,
    Link,
    Button,
    List,
    ListItem,
    Heading,Box,AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/projects'
  import Paragraph from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  import LinkItem from 'next/link'
import Section from "../../components/section"
import Footer from '../../components/footer'
  

const document="https://docs.google.com/document/d/1Pdo_V-YAdHQyj_Zzum8cI1an7nEvQeiG/edit?usp=sharing&ouid=103293729344759720000&rtpof=true&sd=true"

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
          Bicycle Theft Dataset. Generating pkl files from dataset and regression. Using pkl for Flask and HTML for Frontend. 
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Ja1Pat3L/pythonAPI">
            https://github.com/Ja1Pat3L/pythonAPI <ExternalLinkIcon mx="2px" />
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
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/sG-dRU3UXd0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </AspectRatio>

          <Box mb={6}mt={6} align='center'>
<Button as={Link} href={document} colorScheme='purple' variant='solid'>Documentation</Button>
</Box>

<Title>
            AWS-WPF Library Application <Badge>2022</Badge>
        </Title>
        <Paragraph>
          A C# WPF application featuring authentication through AWS DynamoDB and storing books in AWS S3 bucket. A book library application with syncfusion PDF viewer.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Ja1Pat3L/wpfaws">
            https://github.com/Ja1Pat3L/wpfaws <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>WPF.NET Library Application</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>C#-WPF.NET-AWSS3-AWS DynamoDB</span>
          </ListItem>

        </List>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/ajaqWjQ6MbE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          </AspectRatio>
          <Title>
            Android Applications-Various <Badge>2021</Badge>
        </Title>
        <Paragraph>
          Java based Android Applications with authentication, animations and maps.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://drive.google.com/drive/folders/165hRhUcvaHr3jZv7rYpHUQkRoEITjrih?usp=share_link">
            Google Drive Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>Android Applications</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>Java</span>
          </ListItem>

        </List>

      </Container><Footer/>
    </Layout>
  )
  export default Project