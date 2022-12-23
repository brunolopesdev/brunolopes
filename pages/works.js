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
import thumbForever from '../public/images/thumbForever.png'
import thumbDistribuidor from '../public/images/thumbDistribuidor.png'
import thumbVizzela from '../public/images/thumbVizzela.png'
import thumbGringa from '../public/images/thumbGringa.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <>
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Professional Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="foreverliss" title="Forever Liss (Current)" thumbnail={thumbForever}>
              E-commerce for beauty products with VTEX platform. 
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="distribuidorforeverliss" title="Distribuidor Forever Liss (Current)" thumbnail={thumbDistribuidor}>
              E-commerce(B2B) for beauty products with VTEX platform. 
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="vizzela" title="Vizzela" thumbnail={thumbVizzela}>
              E-commerce for makeup products with VTEX platform. 
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="gringa" title="Gringa Shop" thumbnail={thumbGringa}>
              E-commerce for women's clothing.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>

    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Personal Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="2b" title="2b" thumbnail={thumb2b}>
              Web weather app
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="petStore"
              title="Pet Store"
              thumbnail={thumbPetStore}
            >
              Pet Store homepage
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="avanti" title="Avanti" thumbnail={thumbEcommerce}>
              female online store with add to cart functionality
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="omnix" title="Omnix" thumbnail={thumbOmnix}>
              Project with postal code query to show availability of products
              for the customer.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="private"
              title="Private Code"
              thumbnail={thumbPrivate}
            >
              Website page for pre-university courses school.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="venture"
              title="Venture Labs"
              thumbnail={thumbVenture}
            >
              Website page to register and list users, using a form with
              multiple steps.
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
    </>
  )
}

export default Works
