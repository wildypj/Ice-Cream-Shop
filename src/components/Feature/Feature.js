import React from 'react'
import{
    FeatureContainer,
    FeatureButton
} from './Feature.styled'

function Feature() {
  return (
    <FeatureContainer>
        <h1>Deal of the day</h1>
        <p>
        Savor summer with our velvety Strawberry Gelato.
        </p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature