import { Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container mt='20' mb='3'align="center" textColor="#8052ff" fontSize="sm">
      &copy; {new Date().getFullYear()} Jai Patel. All Rights Reserved.
    </Container>
  )
}

export default Footer