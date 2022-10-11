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
        {/* <Title>
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
        </AspectRatio> */}

        <Title>
          Complexity <Badge> 2021 </Badge>
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
            src="https://www.youtube.com/embed/UP3XvTV9Tlo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>

        <Title>
          Portfolio 2 <Badge> 2021 </Badge>
        </Title>
        <Paragraph>
          A Portfolio Website made with MongoDB and Express Authentication for services.
        </Paragraph>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://comp229-jaipatel-assignment2.herokuapp.com/home">
            https://comp229-jaipatel-assignment2.herokuapp.com/home <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Ja1Pat3L/COMP229-F2021-Week6-Assignment2.git">
            https://github.com/Ja1Pat3L/COMP229-F2021-Week6-Assignment2.git <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>Express MongoDb Portfolio Website</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>Express.js/MongoDB/Node.js</span>
          </ListItem>

        </List>

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/w2KOd4EdYzM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>

        <Title>
          Portfolio 1 <Badge>2021</Badge>
        </Title>
        <Paragraph>
          An Express.js Portfolio Website.
        </Paragraph>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="https://comp229-f2021-wk4-assignment1.herokuapp.com/">
            https://comp229-f2021-wk4-assignment1.herokuapp.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Ja1Pat3L/comp229-f2021-wk4-assignment1.git">
            https://github.com/Ja1Pat3L/comp229-f2021-wk4-assignment1.git <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>Express Portfolio Website</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>Express.js/Node.js</span>
          </ListItem>

        </List>

        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/KRLtyQM87YE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>


      </Container><Footer/>
    </Layout>
  )
  export default Project