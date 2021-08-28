import { VFC } from 'react'
import { Box, Center } from '@chakra-ui/react'

export const Footer: VFC = () => {
  return (
    <Box bg="blue.600" p="5" as="footer">
      <Center as="small" fontSize="sm" color="white">©️ 2021 irico All rights reserved.</Center>
    </Box>
  )
}