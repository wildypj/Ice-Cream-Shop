import React from 'react'
import {
    ProductContainer,
    ProductWrapper,
    ProductHeading,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductsButton,
} from './Products.styled'

function Products({heading, data}) {
  return (
    <ProductContainer>
        <ProductHeading>{heading}</ProductHeading>
        <ProductWrapper>
            {data.map((product, index) => {
                return(
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt}/>
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductsButton>{product.button}</ProductsButton>
                        </ProductInfo>
                    </ProductCard>
                )
            })}
        </ProductWrapper>
    </ProductContainer>
  )
}

export default Products