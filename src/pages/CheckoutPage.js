import React from 'react'
import styled from 'styled-components'
import { PageHero} from '../components'


const CheckoutPage = () => {
  return <main>
    <PageHero title='chekout'>checkout page</PageHero>
    <Wrapper className='page'>
      <h1>Checkout Here</h1>
    </Wrapper>
  </main>
}
const Wrapper = styled.div``
export default CheckoutPage
