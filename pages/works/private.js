import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="private-code">
      <Container>
        <Title>
          Private-code <Badge>2021</Badge>
        </Title>
        <P>Website page for pre-university courses school.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, React-icons, Html, Sass, Javascript, Vite</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="http://private-code.vercel.app/" target="_blank">
              http://private-code.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev/private-code" target="_blank">
              brunolopesdev/private-code <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/private-code.png" alt="Projeto Private Code" />
      </Container>
    </Layout>
  )
}

export default Work
