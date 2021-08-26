import { VFC, ReactNode } from 'react'
import { Container, Box } from '@chakra-ui/react'
import { Header } from '../components/header'
export const Layer: VFC<{ children: ReactNode }> = ({ children }) => (
  <Box px={10} py={10}>
    <Header />
    <Box as='main'>
      {children}
    </Box>
  </Box>
)