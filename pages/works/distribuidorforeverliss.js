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
          Distribuidor Forever Liss <Badge>2022</Badge>
        </Title>
        <P>
        E-commerce(B2B) for the sale of beauty products such as shampoo, masks, skin care and others..
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web - VTEX</span>
          </ListItem>
          <ListItem>
            <Meta>My Role</Meta>
            <span>Development of new features, maintenance of existing ones and code review for other developers in my team.</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Html, CSS, TypeScript, Axios, VTEX IO</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.distribuidorforeverliss.com.br/" target="_blank">
              distribuidorforeverliss.com.br <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/brunolopesdev" target="_blank">
              The github for this organization is private. <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/thumbDistribuidor.png" alt="Distribuidor Forever Liss" />
      </Container>
    </Layout>
  )
}

export default Work
