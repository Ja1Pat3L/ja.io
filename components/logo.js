import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Logos from '../public/images/Logo.png'

const LogoBox = styled.span`
  font-weight: bold;
  word-spacing:0.5px;
  font-size: 26px;
  align-items: center;
  
  img {
    transition: 200ms ease;
    
  }
  &:hover img {
    transform: rotate(180deg);
  }  
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox><Text
            color={useColorModeValue('#8052FF', '#8052FF')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}  
          >
            J a <Image src={Logos} width={4.12} height={20} layout='fixed' alt="logo" />
          </Text>
       
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo