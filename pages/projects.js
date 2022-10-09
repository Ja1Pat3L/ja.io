import {Container,Box,Heading,SimpleGrid} from "@chakra-ui/react"
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import Layout from '../components/layouts/article'
import Footer from "../components/footer"
import next from "../public/images/next.png"
import others from "../public/images/others.png"
import mern from "../public/images/mern.png"
import javaswing from "../public/images/swing.png"
import asp from "../public/images/asp.png"
import internship from "../public/images/internship.png" 
import matlab from "../public/images/matlab.png"
import powerbi from "../public/images/powerbi.png"

const Projects=()=>{

    return(
        <Layout>
<Container>
<Section delay={0.1}>
      <Box borderRadius="lg" mb={20} p={3}  
      bg={{backdropFilter: 'blur(2px)'}}
      aria-label="Options"
      css={{backdropFilter: 'blur(30px)'}}>
 <Heading align='center' size="24" textColor="#8052ff">Click on each project to know more</Heading>  
      </Box>
      </Section>

<SimpleGrid columns={(1,1,2)} gap={6}>
<Section delay={0.3}>
    <WorkGridItem id="NextJs"  thumbnail={next}>

    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="ASP" thumbnail={asp}>
    
</WorkGridItem>
</Section>
<Section delay={0.3}>
    <WorkGridItem id="JAVAEE"  thumbnail={powerbi}>
 
    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="MERN"  thumbnail={mern}>   
</WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="PowerBI"  thumbnail={javaswing}>
</WorkGridItem>
</Section>
<Section delay={0.3}>
    <WorkGridItem id="Android" thumbnail={matlab}>
    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="MATLAB"  thumbnail={others}> 
</WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="AUTOCAD" thumbnail={internship}>
</WorkGridItem>
</Section>
</SimpleGrid>
<Footer/>
</Container></Layout>
    )
}

export default Projects
