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
          QuoteMe <Badge>2022-</Badge>
        </Title>
        <Paragraph>
          Currently working on a Software Engineering Technology Group Project based on React.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ja-io.vercel.app">
            unhosted <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem><ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Ja1Pat3L/ja.io">
            https://github.com/Ja1Pat3L/ja.io <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>React Laptop Quotation Website</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>React.js-MongoDb-Node.js</span>
          </ListItem>

        </List>

        
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>

        <Title>
          Complexity<Badge>2021-</Badge>
        </Title>
        <Paragraph>
          A survey website made using Express.js. Transformed into an Angular website. Website is capable of Authentication and Collecting User Surveys.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/DanielMJSilva/COMP229_Group10_Complexity">
            https://github.com/DanielMJSilva/COMP229_Group10_Complexity <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>MEAN Survey Website</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>TypeScript/Express.js/Angular.js/MongoDB/Node.js</span>
          </ListItem>

        </List>

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/-qBavwqc_mY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>



      </Container>
    </Layout>
  )
  export default Project