import { Header } from "./header"

type Props = {
  children: React.ReactNode
}

export const Layout = (props: Props) => {
  const {children} = props;
  return (
    <>
    <Header />
    <main>{children}</main>
    </>
  )
}