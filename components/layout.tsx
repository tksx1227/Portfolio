import { Header } from "./header"
import { Container, Box } from "@chakra-ui/react"

type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  const {children} = props;
  return (
    <>
      <Header />
      <Container maxW="container.lg" as="main" borderWidth="1px">
        <Box w="100%" p="md" borderRadius="lg" boxShadow="sm">
          {children}
        </Box>
      </Container>
    </>
  )
}