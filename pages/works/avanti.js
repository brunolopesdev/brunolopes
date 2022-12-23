import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="avanti">
      <Container>
        <Title>
          Avanti E-commerce <Badge>2021</Badge>
        </Title>
        <P>Simulation of a female clothing ecommerce.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Html, Sass, Javascript, Vite, Axios</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://avanti-challenge.herokuapp.com/" target="_blank">
              https://avanti-challenge.herokuapp.com/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev/avanti-challenge" target="_blank">
              brunolopesdev/avanti-ecommerce <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/avanti.png" alt="Projeto Avanti" />
      </Container>
    </Layout>
  )
}

export default Work
