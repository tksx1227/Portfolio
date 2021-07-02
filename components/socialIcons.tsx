import { SocialIcon } from 'react-social-icons';

// import styles from "./socialIcons.module.css"

const style = {
  width: "35px",
  height: "35px",
  opacity: ".5"
}

export const TwitterIcon = () => {
  return (
    <SocialIcon bgColor="rgba(150, 160, 175, .8)" style={style} url="https://twitter.com/tksx1227" />
  )
}

export const GithubIcon = () => {
  return (
    <SocialIcon bgColor="rgba(150, 160, 175, .8)" style={style} url="https://github.com/tksx1227" />
  )
}

export const YoutubeIcon = () => {
  return (
    <SocialIcon bgColor="rgba(150, 160, 175, .8)" style={style} url="https://www.youtube.com/watch?v=HWbKkbRM4OA" />
  )
}