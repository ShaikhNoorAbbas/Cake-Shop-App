import Head from 'next/head';
import { Container } from '@mui/material';
import Intro from '../components/Intro';
import CakeSection from '../components/CakeSection';
import Contact from '../components/Contact';
const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Intro />
        <CakeSection />
        <Contact />
      </Container>
    </>
  )
}

export default IndexPage;