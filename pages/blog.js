import React, { useState } from 'react';
import Navy from '../components/navy'
import Head from 'next/head';
import Image from 'next/image';
import blogImg from '../assets/exalted-IT.png'
import {Container , Row , Col , Button , Offcanvas , Header } from 'react-bootstrap'




export default function Example() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
<div className="mt-1">

<Head>
  <title>Blog - Mominul Islam Rafi</title>
</Head>
<Navy />
<Container mt-5 fluid>
<Row>
<Button variant="primary" onClick={handleShow}>
Launch
</Button>
</Row>
</Container>
<Offcanvas show={show} onHide={handleClose}>
<Offcanvas.Header closeButton>
<Offcanvas.Title>post.id</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
<Image src={blogImg} width="636" height="872" />
</Offcanvas.Body>
</Offcanvas>
</div>
);
}