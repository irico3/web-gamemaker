import { VFC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Box, Container } from '@chakra-ui/react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
export const Layer: VFC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Box px={10} py={10} minH="95vh">
      <Header />
      <ContainerCss maxW="container.lg" as='main'>
        {children}
      </ContainerCss>
    </Box>
    <Footer />
  </>
)

const ContainerCss = styled(Container)`
  & h1 {
    font-size: 2rem;
    font-weight: bold;
    padding:30px 0;
  }
  & h1 + * {
    padding-top: 0;
  }
  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 20px;
  }
  & p {
    padding-top: 30px;
    line-height: 1.8;
  }

  & a {
    color: #4783fc;
    &:hover {
      border-bottom: 1px solid #4783fc;
    }
  }
`