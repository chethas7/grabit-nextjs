import Banner from '@/components/Banner'
import Container from '@/components/Container'
import ProductGrid from '@/components/ProductGrid'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Banner />
      <div className='py-10'>
        <ProductGrid />
      </div>
    </Container>
  )
}

export default Home
