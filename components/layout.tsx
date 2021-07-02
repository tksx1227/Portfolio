import { Header } from "./header"
import { Container } from "@chakra-ui/react"

type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  const {children} = props;
  return (
    <>
      <Header />
      <Container maxW="container.lg" as="main" borderWidth="2px">
          {children}
      </Container>
    </>
  )
}