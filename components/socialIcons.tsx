import { SocialIcon } from 'react-social-icons';

import styles from "./socialIcons.module.css"

const property = {
  bgColor: "rgba(150, 160, 175, .8)",
  style: {
    width: "35px",
    height: "35px",
  },
  className: styles.defaultIcon
}

export const TwitterIcon = () => {
  return (
    <SocialIcon {...property} url="https://twitter.com/tksx1227" />
  )
}

export const GithubIcon = () => {
  return (
    <SocialIcon {...property} url="https://github.com/tksx1227" />
  )
}

export const YoutubeIcon = () => {
  return (
    <SocialIcon {...property} url="https://www.youtube.com/watch?v=HWbKkbRM4OA" />
  )
}