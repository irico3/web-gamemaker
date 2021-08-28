import { VFC, ReactNode } from 'react'
import { Flex, Box, Heading, Text, HStack, Button, useColorMode, useColorModeValue, MenuButton, MenuList, MenuItem, Menu } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
  return (
    <Link
      px={2}
      py={2}
      href={href}
      _hover={{
        bg: btnOnColor
      }}
    > {children}</Link >

  )
}



export const Header: VFC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as="header">
      <Heading px={'6'} bg={useColorModeValue("red.400", "red.600")}>GameMaker Studio2 JP Club</Heading>
      <Text px={'6'} pt={'1'}>GameMaker Studio2の日本語コンテンツを紹介します。</Text>
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
        borderColor={'gray.200'}
        justifyContent={'space-between'}
        align={'center'}
      >
        <HStack as={'nav'} spacing={4}>
          <NavLink href='/' >Home</NavLink>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              GMS IDE日本語化
            </MenuButton>
            <MenuList>
              <MenuItem><Link href='/ide/setting' w="100%">設定方法</Link></MenuItem>
              <MenuItem><Link href='/ide/community' w="100%">コミュニティ</Link></MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Button colorscheme="blue" onClick={toggleColorMode}>
          {colorMode === 'light' ? 'ダークモード🌙' : 'ライトモード☀️'}
        </Button>
      </Flex>
    </Box >
  )
}