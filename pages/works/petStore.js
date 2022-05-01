import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="petStore">
      <Container>
        <Title>
          Pet Store <Badge>2021</Badge>
        </Title>
        <P>Website que simula um e-commerce para um Pet Shop.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Html, Sass, Javascript, Vite</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://seri-e.vercel.app/">
              http://seri-e.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev/SERI.E">
              brunolopesdev/petStore <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/petStore.png" alt="Projeto Pet Store" />
      </Container>
    </Layout>
  )
}

export default Work
