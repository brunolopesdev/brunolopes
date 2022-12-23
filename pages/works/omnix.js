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
          Project with postal code query to show availability of products for
          the customer.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
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
            <Link href="http://omnix.vercel.app/" target="_blank">
              http://omnix.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev/omnix" target="_blank">
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
