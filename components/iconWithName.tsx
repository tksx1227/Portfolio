import Image from "next/image"
import Link from "next/link"
import { Box } from "@chakra-ui/react"

import styles from "./iconWithName.module.css"

export const IconWithName = () => {
  return (
    <Box align="center">
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/icon.jpg"
            height={150}
            width={150}
            className={styles.borderCircle}
            alt="tomo"
          />
        </a>
      </Link>
      <p className={styles.name}>tomo</p>
    </Box>
  )
}