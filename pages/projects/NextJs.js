import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/projects'
  import Paragraph from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Project = () => (
    <Layout title="NextJs">
      <Container>
        <Title>
          ja-io <Badge>2022-</Badge>
        </Title>
        <Paragraph>
          A portfolio website made using next.js rendering 3d Object. Using Spline React to load object with premade orbit controls using three.js.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ja-io.vercel.app">
            https://ja-io.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>Next.js/Spline.js/Chart.js/Chakra.js/React/three.js</span>
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