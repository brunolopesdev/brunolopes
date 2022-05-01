import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="2b">
      <Container>
        <Title>
          2b <Badge>2021</Badge>
        </Title>
        <P>
          Web app de previsão do tempo, que recebe um CEP ou nome da
          cidade/estado/país e retorna as condições de tempo atuais.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Html, Sass, Javascript, Axios</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://2b-three.vercel.app/">
              https://2b-three.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev/2b">
              brunolopesdev/2b <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/2b.png" alt="Projeto 2b" />
      </Container>
    </Layout>
  )
}

export default Work
