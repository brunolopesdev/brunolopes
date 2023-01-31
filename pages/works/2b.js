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
          2b <Badge>2023</Badge>
        </Title>
        <P>
          Weather web app, receives a postal code or city/country name and
          returns the weather conditions.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Html, Sass, Javascript, Axios</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://2b-three.vercel.app/" target="_blank">
              https://2b-three.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev/2b" target="_blank">
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
