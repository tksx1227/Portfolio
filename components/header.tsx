import Link from "next/link"
import { Box, Flex,Spacer } from "@chakra-ui/react"

export const Header = () => {
  return (
    <Box as="header" p="5" w="100%"  boxShadow="md" mb="5">
      <Flex align="right">
        <Spacer />
        <Box mr="5">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Box>
        <Box mr="5">
          <Link href="/about">
            <a>About</a>
          </Link>
          </Box>
        <Box mr="5">
          <Link href="/works">
            <a>Works</a>
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}
