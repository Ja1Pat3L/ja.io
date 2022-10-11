import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,Box,Button
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
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
          Lung Cancer Detection <Badge>2020-</Badge>
        </Title>
        <Paragraph>
          Lung cancer detection using Matlab image processing. K-Means Clustering and Neural Network Tools along with Cancer Classifiers. Requires Computerized Tomography scans.
        </Paragraph>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Source</Meta>
            <Link href=" https://github.com/Ja1Pat3L/LungCancerDetectionUsingMATLAB.git"> https://github.com/Ja1Pat3L/LungCancerDetectionUsingMATLAB.git<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem textColor="#8052ff">
            <Meta>Platform</Meta>
            <span>MATLAB GUI Lung Cancer Detection</span>
          </ListItem>
          <ListItem textColor='#8052ff'>
            <Meta>Stack</Meta>
            <span>MATLAB</span>
          </ListItem>
        </List>

<Box align='center'>
<Button colorScheme='purple' variant='solid'>Download Report</Button>
</Box>


      </Container><Footer/>
    </Layout>
  )
  export default Project

 