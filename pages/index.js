import { ChevronRightIcon, Icon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { LinkedinLogo, GithubLogo, Envelope } from 'phosphor-react'
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
            I'm a Front-end Developer who loves what I do, I'm always up for new
            challenges and constantly challenging myself to improve my
            knowledge.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
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
            Born in São Paulo, Brazil.
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Interest in technology began.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>I started my studies in the Analysis and
            Development of Systems and Full Stack Web Development, by Digital
            House Brazil.
          </BioSection>
          <BioSection>
            <BioYear>2021 to the moment</BioYear>
            Working as a Front End Developer.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Games, Music, TV Shows, and learning new technologies.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/brunolopesdev" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<GithubLogo size={30} weight="light" />}
                >
                  @brunolopesdev
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/bruno-lopes-b8483b155/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<LinkedinLogo size={30} weight="light" />}
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
                  leftIcon={<Envelope size={30} weight="light" />}
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
