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
          Gringa Shop <Badge>2021/2022</Badge>
        </Title>
        <P>
        E-commerce for women's clothing.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web - VTEX</span>
          </ListItem>
          <ListItem>
            <Meta>My role</Meta>
            <span>Development of new features, maintenance of existing ones, code review and others.</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vuejs, Html, Sass, Javascript, Axios, VTEX</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.gringashop.com" target="_blank">
            gringashop.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev" target="_blank">
              The github for this organization is private. <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/thumbGringa.png" alt="Gringa Shop" />
      </Container>
    </Layout>
  )
}

export default Work
