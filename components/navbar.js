import Logo from './logo'
import NextLink from 'next/Link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,useColorModeValue, Button, transition
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#8052FF', '#8052FF')
    return (
      <NextLink href={href} passHref scroll={false}>
        <Link
          p={2}
          bg={active ? 'grassTeal' : undefined}
          color={active ? '#202023' : inactiveColor}
        >
          {children}
        </Link>
      </NextLink>
    )
  }
  
  const Navbar = props => {
    const { path } = props
  
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
      <Heading 
      color={useColorModeValue('#8052FF', '#8052FF')}
      fontFamily='M PLUS Rounded 1c", sans-serif'
      fontWeight="bold"
      ml={3}
      
      as="h1" size="lg" letterSpacing={'tighter'}>
        <Logo />
      </Heading>
    </Flex>
    <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            About
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Projects
          </LinkItem>
          <Button borderRadius="lg" solid
        mb={6}
        p={3}
        
        textColor='#8052ff'
        textAlign="center"
        bg={'8052ff'}
        css={{ backdropFilter: 'blur(30px)', padding: 12  
       }  }
      >Download Resume</Button>

        </Stack>
        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
      </Container>
    </Box>
    )
}
  
// const Menu = styled.ul`
//   display: flex;
//   gap: 30px;
//   align-items: center;
//   margin: 0 30px 0 100px;
//   padding: 0;
//   pointer-events: auto;  button {
//     margin: 0;
//     width: auto;
//     background: rgba(31, 66, 250, 0.2);
//     border: 1px solid rgba(255, 255, 255, 0.4);
//   }

//   @media (max-width: 800px) {
//     justify-content: space-between;
//     li:nth-child(2),
//     li:nth-child(3),
//     li:nth-child(4),
//     li:nth-child(5) {
//       display: none;
//     }
//   }
// `;


  export default Navbar