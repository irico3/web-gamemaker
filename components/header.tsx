import { VFC, ReactNode } from 'react'
import { Flex, Box, Heading, Text, HStack, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Link from '../components/link'
import { useRouter } from 'next/router';


type NavLinkProps = {
  href: string,
  children: ReactNode
}
const NavLink: VFC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter()
  const btnOnColor = useColorModeValue('gray.200', 'gray.700')
  const btnOffColor = useColorModeValue('white', 'gray.800')
  const isThisRoute = router.pathname === href
  return (
    <Link
      px={2}
      py={2}
      href={href}
      _hover={{
        bg: btnOnColor
      }}
      bg={isThisRoute ? btnOnColor : btnOffColor}
    > {children}</Link >

  )
}



export const Header: VFC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as="header">
      <Heading as="h1">GameMaker Studio2 JP Club</Heading>
      <Text>GameMaker Studio2の日本語コンテンツを紹介します。</Text>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        my={5}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderTop={1}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        justifyContent={'space-between'}
        align={'center'}
      >
        <HStack as={'nav'} spacing={4}>
          <NavLink href='/' >Home</NavLink>
          <NavLink href='/transition'>GMS日本語化</NavLink>
        </HStack>
        <Button colorscheme="blue" onClick={toggleColorMode}>
          {colorMode === 'light' ? 'ダークモード🌙' : 'ライトモード☀️'}
        </Button>
      </Flex>
    </Box>
  )
}