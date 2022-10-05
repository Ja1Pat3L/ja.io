import {Container,Box,Heading,SimpleGrid} from "@chakra-ui/react"
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import Layout from '../components/layouts/article'
import Footer from "../components/footer"
import next from "../public/images/Next.png"
import android from "../public/images/Android.png"
import mern from "../public/images/Mern.png"
import javaswing from "../public/images/JavaSwing.png"
import asp from "../public/images/Asp.png"
import internship from "../public/images/Internship.png" 
import matlab from "../public/images/Matlab.png"
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
    <WorkGridItem id="NextJs" title="Next.js Portfolio" thumbnail={next}>
Currently working on Nextjs Portfolio
    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="ASP" title="ASP.NET API and MVC" thumbnail={asp}>
    A REST API based on ASP.net used for a simple ASP.Net MVC front end tutorial Website with authentication and Client Support 
</WorkGridItem>
</Section>
<Section delay={0.3}>
    <WorkGridItem id="JAVAEE" title="Java EE API" thumbnail={javaswing}>
 A REST API based on Java Enterprise Edition 
    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="MERN" title="MERN Stack Portfolio " thumbnail={mern}>
    A personal portfolio project based on MERN Stack  
</WorkGridItem>
</Section>
<Section delay={0.3}>
    <WorkGridItem id="Android" title="Restaurant Application" thumbnail={android}>
An android application to locate restaurants in nearby locations
    </WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="MATLAB" title="Lung Cancer Detection " thumbnail={matlab}>
    Lung Cancer Detection using MATLAB image Processing using K-Means clustering 
</WorkGridItem>
</Section>
<Section delay={0.3}>
<WorkGridItem id="AUTOCAD" title="Tractebel Engineering Internship" thumbnail={internship}>
    Internship at Tractebel Engineering Pvt. Ltd. on a client based Gas Pipeline Project  
</WorkGridItem>
</Section>
</SimpleGrid>
<Footer/>
</Container></Layout>
    )
}

export default Projects
