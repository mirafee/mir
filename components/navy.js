import Head from 'next/head';
import Link from 'next/link';
import * as Icon from 'react-bootstrap-icons';
import {Button , Col , Row , Nav} from 'react-bootstrap'

export default function Navy() {
return (
<>
<Head>
<title>Mominul Islam Rafi</title>
</Head>
<Nav fill variant="tabs" defaultActiveKey="">
  <Nav.Item>
  <Link href="/" passHref>
    <Nav.Link style={{ color: 'red' }} size="xl" eventkey="hello" >
      <Icon.AppIndicator size={30}/>
    </Nav.Link>
  </Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/resume" passHref>
    <Nav.Link style={{ color: 'red' }} size="xl" eventkey="hello" >
      <Icon.InfoCircle size={30}/>
    </Nav.Link>
    </Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/blog" passHref>
    <Nav.Link style={{ color: 'red' }} size="xl" eventkey="hello" >
      <Icon.ChatLeftQuote size={30}/>
    </Nav.Link>
    </Link>
  </Nav.Item>
  <Nav.Item>
    <Link href="/contact" passHref>
    <Nav.Link style={{ color: 'red' }} size="xl" eventkey="hello" >
      <Icon.Chat size={30}/>
    </Nav.Link>
    </Link>
  </Nav.Item>
</Nav>
</>
)
}


