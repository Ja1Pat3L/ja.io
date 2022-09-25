import {Container,SimpleGrid} from "@chakra-ui/react"
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'

import image1 from '../public/images/image1.png'

const Projects=()=>{

    return(
<Container>

<SimpleGrid columns={(1,1,2)} gap={6}></SimpleGrid>
<Section delay={0.3}>
    <WorkGridItem id="NextJs" title="Next.js Portfolio" thumbnail={image1}>
Currently working on Nextjs Portfolio
    </WorkGridItem>
</Section>
<Section>
<WorkGridItem id="ASP.Net" title="ASP.NET API and MVC" thumbnail={image1}>
    A REST API based on ASP.net used for a simple ASP.Net MVC front end tutorial Website with authentication and Client Support 
</WorkGridItem>
</Section>
<Section>
    <WorkGridItem id="JAVAEE" title="Java Enterprise Edition API" thumbnail={image1}>
 A REST API based on Java Enterprise Edition 
    </WorkGridItem>
</Section>
<Section>
<WorkGridItem id="MERN" title="MERN Stack Portfolio " thumbnail={image1}>
    A personal portfolio project based on MERN Stack  
</WorkGridItem>
</Section>
<Section>
    <WorkGridItem id="Android" title="Restaurant Locator Android Application" thumbnail={image1}>
An android application to locate restaurants in nearby locations
    </WorkGridItem>
</Section>
<Section>
<WorkGridItem id="MATLAB" title="Lung Cancer Detection using MATLAB" thumbnail={image1}>
    Lung Cancer Detection using MATLAB image Processing using K-Means clustering 
</WorkGridItem>
</Section>
</Container>
    )
}

export default Projects
