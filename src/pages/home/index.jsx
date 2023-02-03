import { useContext } from 'react'
import Container from '../../components/container'
import Header from '../../components/header'
import { GlobalContext } from '../../contexts/globalContext'

function Home() {
  const name = useContext(GlobalContext)
  console.log(name)
  return (
    <>
      <Header />
      <Container />
    </>
  )
}

export default Home
