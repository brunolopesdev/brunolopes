import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { CodeSimple } from 'phosphor-react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  transition: 0.3s;
  color: #81e6d9;

  &:hover svg {
    transform: rotate(20deg);
    transition: 0.3s;
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          {/* <Image src={footPrintImg} width={20} height={20} alt="logo" /> */}
          <CodeSimple size={32} weight="duotone" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Bruno Lopes
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
