import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,useColorModeValue, Button
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#8052FF', '#8052FF')
    return (
      <NextLink href={href} passHref scroll={false}>
        <Link
          p={2}
          bg={active ? 'purple' : undefined}
          color={active ? '#202023' : inactiveColor}
        >
          {children}
        </Link>
      </NextLink>
    )
  }
  
  const Navbar = props => {
    
  
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        zIndex={2}
        {...props}
    ><Container
    display="flex"
    p={2}
    maxW="container.md"
    wrap="wrap"
    align="center"
    justify="space-between"
  >
    <Flex align="center" mr={5}>
      <Logo />
    </Flex>
    <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* <LinkItem href="/about" path='../pages/about.js'>
            About
          </LinkItem> */}
          <LinkItem href="/projects" path='../pages/projects.js'>
            Projects
          </LinkItem>
          <Button 
             as={Link}
             href="https://github.com/Ja1Pat3L/ja.io/"
          borderRadius="lg" solid
        mb={6}
        p={3}
        
        textColor='#8052ff'
        textAlign="center"
        bg={'8052ff'}
        css={{ backdropFilter: 'blur(30px)'  
       }  }
      >Github</Button>
      {/* <Button 
             as={Link}
             href="https://drive.google.com/file/d/1X_qNGaMOo_W_KmiUlfDqLIBMsb59OQn_/view?usp=sharing"
          borderRadius="lg" solid
        mb={6}
        p={3}
        
        textColor='#8052ff'
        textAlign="center"
        bg={'8052ff'}
        css={{ backdropFilter: 'blur(30px)'  
       }  }
      >Resume</Button> */}
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton/>
        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                textColor="#8052ff"
                bg={{backdropFilter: 'blur(2px)'}}
                css={{backdropFilter: 'blur(30px)'}}
              />
              <MenuList
              textColor="#8052ff"
                bg={{backdropFilter: 'blur(2px)'}}
                css={{backdropFilter: 'blur(30px)'}}
              >
                {/* <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink> */}
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                {/* <NextLink href="https://drive.google.com/file/d/1X_qNGaMOo_W_KmiUlfDqLIBMsb59OQn_/view?usp=sharing" passHref>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink> */}
              </MenuList>
            </Menu>
          </Box></Box>
      </Container>
    </Box>
    )
}
  export default Navbar