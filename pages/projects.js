import {Container,Box,Heading,SimpleGrid} from "@chakra-ui/react"
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import Layout from '../components/layouts/article'
import Footer from "../components/footer"
import nextimage from "../public/images/nextimage.png"
import othersimage from "../public/images/othersimage.png"
import mernimage from "../public/images/mernimage.png"
import javaswingimage from "../public/images/swingimage.png"
import aspimage from "../public/images/aspimage.png"
import internshipimage from "../public/images/internshipimage.png" 
import matlabimage from "../public/images/matlabimage.png"
import powerbiimage from "../public/images/powerbiimage.png"

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
    <WorkGridItem id="NextJs"  thumbnail={nextimage}>

    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="ASP" thumbnail={aspimage}>
    
</WorkGridItem>
</Section>
<Section delay={0.3}>
    <WorkGridItem id="JAVAEE"  thumbnail={powerbiimage}>
 
    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="MERN"  thumbnail={mernimage}>   
</WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="PowerBI"  thumbnail={javaswingimage}>
</WorkGridItem>
</Section>
<Section delay={0.3}>
    <WorkGridItem id="Android" thumbnail={matlabimage}>
    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="MATLAB"  thumbnail={othersimage}> 
</WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="AUTOCAD" thumbnail={internshipimage}>
</WorkGridItem>
</Section>
</SimpleGrid>
<Footer/>
</Container></Layout>
    )
}

export default Projects
