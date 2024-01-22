import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 100vw;
    height: 120vh;
    padding: 5rem calc((100vh - 1300px) /2);
    background: #150f0f;
    color: #fff;

    @media screen and (max-width: 720px){
        height: 310vh;
    }

  
`
export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;

`
 export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
 `

 export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
 `

 export const ProductHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
 `

 export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
 `

 export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
 `

 export const ProductDesc = styled.p`
    margin-bottom: 1rem;
 `

 export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
 `

 export const ProductsButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    border-radius: 10px;
    background: #C21E56;
    color: #fff;
    transition: 0.2 ease-in-out;

    &:hover{
        background: #088F8F;
        transition: 0.2 ease-in-out;
        cursor: pointer;
        color: #000;
    }

 `