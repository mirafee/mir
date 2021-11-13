import Head from 'next/head'
import Navy from '../components/navy'
import styles from '../styles/Home.module.css'
import { Carousel } from 'react-bootstrap'
import { Container , Row , Col } from 'react-bootstrap'
import Image from 'next/image'

const myLoader = () => {
  return `https://source.unsplash.com/1`
}


export default function Resume() {

      return (

<div>

  <Head>
    <title>Mominul Islam Rafi - MIR</title>
  </Head>
  <Navy />
  
  
  
  <p>Resume</p>

</div>

)
}