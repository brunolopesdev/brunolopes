import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="omnix">
      <Container>
        <Title>
          Omnix <Badge>2021</Badge>
        </Title>
        <P>
          Website que simula uma página para venda de planos, recebe o CEP do
          cliente e mostra os planos/produtos disponíveis.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React, React-icons, Context API, Html, Sass, Javascript, Vite,
              Axios
            </span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://omnix.vercel.app/">
              http://omnix.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev/omnix">
              brunolopesdev/omnix <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/omnix.png" alt="Projeto Omnix" />
      </Container>
    </Layout>
  )
}

export default Work
