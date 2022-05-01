import { ChevronRightIcon, Icon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  SimpleGrid,
  List,
  ListItem
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a front-end developer based in Brazil!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Bruno Lopes
            </Heading>
            <p>Front-end Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/bruno.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Sou um Desenvolvedor Front-end que adora o que faz, estou sempre
            disposto a novos desafios e constantemente me desafiando para
            aprimorar meus conhecimentos.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Meu portfólio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Nascido em São Paulo, Brasil.
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Começou o interesse pela técnologia.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Comecei os estudos na graduação de Análise e Desenvolvimento de
            Sistemas e Desenvolvimento Web Full Stack, pela Digital House.
          </BioSection>
          <BioSection>
            <BioYear>2021 até o momento</BioYear>
            Atuando como Desenvolvedor Front-end.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Jogos, Músicas, Séries, e aprender novas tecnologias.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contatos
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/brunolopesdev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @brunolopesdev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/brunolopesdev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Bruno Lopes
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:brunoslopes1994@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoMailOutline} />}
                >
                  brunoslopes1994@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
