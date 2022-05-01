import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumb2b from '../public/images/2b.png'
import thumbPetStore from '../public/images/petStore.png'
import thumbEcommerce from '../public/images/avanti.png'
import thumbOmnix from '../public/images/omnix.png'
import thumbPrivate from '../public/images/private-code.png'
import thumbThink4 from '../public/images/think4.png'
import thumbVenture from '../public/images/venture.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="2b" title="2b" thumbnail={thumb2b}>
              Web app de previsão do tempo.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="petStore"
              title="Pet Store"
              thumbnail={thumbPetStore}
            >
              Projeto que simula uma e-commerce de Pet Shop.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="avanti" title="Avanti" thumbnail={thumbEcommerce}>
              Projeto que simula uma e-commerce de roupas femininas.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="omnix" title="Omnix" thumbnail={thumbOmnix}>
              Projeto com consulta de CEP para mostrar disponibilidade de
              produtos para o cliente.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="private"
              title="Private Code"
              thumbnail={thumbPrivate}
            >
              Projeto de website para escola de cursos pré-vestibular.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="venture"
              title="Venture Labs"
              thumbnail={thumbVenture}
            >
              Projeto de website para realizar cadastro e listar usuarios,
              utilizando um formulário com multiplos passos.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="think4" title="Think4" thumbnail={thumbThink4}>
              Landing page.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
