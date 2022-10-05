import { Container,Box, Heading,Image,ListItem,Link,Button,List } from "@chakra-ui/react"
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph';
import { Bio,Title } from '../components/bio'; 
import Footer from '../components/footer';
import { IoLogoDiscord, IoLogoInstagram, IoLogoGithub,IoLogoLinkedin,IoLogoReddit } from 'react-icons/io5'
const profileimage='/images/Profile.png'

const Page = () => {
    return (
      <Layout>
    <Container>
     <Section delay={0.1}>
      <Box borderRadius="lg" mb={18} p={3}  
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <Heading align='center' size="24" textColor="#8052ff">“As in everything, nature is the best instructor” - Adolf</Heading>  
      </Box>
      </Section>
        <br></br> 
        <Box
        flexShrink={0}
        mt={{base:4,md:0}}
        ml={{md:6}}
        align="center"
        >  <Section delay={0.1}>
          <Image maxWidth="100px" display="inine-block"
          src={profileimage} alt="Pic"
          /> 
          <Heading textColor="#8052ff">About Me</Heading>
         
    
      <Box borderRadius="lg" mb="3" p={3} align="center">
         </Box>
 <Paragraph>Jai is a Canada Based Full Stack Developer proficient in implementing Websites, WebAPIs, Data Warehousing and Machine Learning.</Paragraph>

<Box flexShrink={0} borderRadius="md" mt="8" mb="6" p={3} align="center" textColor="#8052ff">
<Heading textColor="#8052ff">Timeline</Heading><br></br>

  <Bio>
  <Title>
    1999
  </Title>
  Born Uttar Pradesh, India
</Bio>
  <Bio>
  <Title>
    2016
  </Title>
  Graduated High School
  </Bio>
  <Bio>
  <Title>
    2020
  </Title>
  Bachelors Computer Science Engineering
  </Bio>
  <Bio>
  <Title>
    2022
  </Title>
  Advanced Graduate Software Engineering Technology 
  </Bio>
</Box>
  <Box flexShrink={0} borderRadius="md" mb="6" align="center" textColor="#8052ff">
  <Heading textColor="#8052ff" mb="6" >Proficiency</Heading>
  <Bio>
  <Title>
    Frameworks
  </Title>
  Next.js, Angular.js, Express.js, Spring, ASP.NET
  </Bio>
  <Bio>
  <Title>
  Databases
  </Title>
MSSQL, SQL-SSMS, MongoDB, DynamoDB
  </Bio>
  <Bio>
  <Title>
    API
  </Title>
   Spring API and Microservices, .NETAPI, Python API
  </Bio>
  <Bio>
  <Title>
   Design
  </Title>
  Three.js, React.js, Spline3D, Figma
  </Bio>
  <Bio>
  <Title>
    Automation
  </Title>
  Python, MATLAB
  </Bio>
  <Bio>
  <Title>
    Source Control
  </Title>
   Github, JIRA
  </Bio>
  <Bio>
  <Title>
  Others
  </Title>
 PowerBI, AUTOCAD, Android 
  </Bio>
               
</Box>
<Box flexShrink={0} borderRadius="md" mt="6" mb="6" p={3} align="center" textColor="#8052ff">
  <Heading textColor="#8052ff">Interests</Heading><br></br>
<Bio>
  <Title>Sports
</Title>
UEFA-Real Madrid CF, FIVB-Japan
</Bio>
<Bio>
  <Title>Games
</Title>
Valorant, Fortnite, CSGO, PES2023, FIFA23
</Bio>
<Bio>
  <Title>Culture
</Title>
Japan, Egypt, Spain, Turkey, Italy, Germany
</Bio>
<Bio>
  <Title>Science
</Title>
Blockchain, Automation, Astrophysics
</Bio>
</Box>
<Box >
<Heading textColor="#8052ff">Socials</Heading><br></br>
<List> <ListItem>
            <Link href="https://www.instagram.com/jai_99_/" target="_blank">
              <Button
                variant="ghost"
                color="#8052ff"
                leftIcon={<IoLogoInstagram />}
              >
                @jai_99_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Ja1Pat3L" target="_blank">
              <Button
                variant="ghost"
                color="#8052ff"
                leftIcon={<IoLogoLinkedin />}
              >
                @JaiPatel
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/Ja1Pat3L" target="_blank">
              <Button
                variant="ghost"
                color="#8052ff"
                leftIcon={<IoLogoGithub />}
              >
                @Ja1Pat3L
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.reddit.com/user/SnooGuavas9295" target="_blank">
              <Button
                variant="ghost"
                color="#8052ff"
                leftIcon={<IoLogoReddit />}
              >
                @TheSexyPriest
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.com/TheSexyPriest#4549" target="_blank">
              <Button
                variant="ghost"
                color="#8052ff"
                leftIcon={<IoLogoDiscord />}
              >
                @TheSexyPriest#4549
              </Button>
            </Link>
          </ListItem>
         
        </List>
</Box>


</Section>


</Box>
<Footer/>  
</Container></Layout>
    )
  }



export default Page
