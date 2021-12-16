import styled from "styled-components";

export const ProductDetails = styled.section`
margin-top: 2.8rem;
margin-bottom: 2.8rem;
.category__name{
    font-size: 18px;
        color: #515151;
}
.productInfo{
    display: flex;
    flex-direction: column;
}

`

export const GridInfo = styled.section`
    display: flex;
    justify-content: space-between;
    @media (max-width: 635px) {
        flex-direction: column;
    }
`

export const GridItem = styled.div`
    width:calc(96% / 2);
    .add_to_cart{
        margin-top: 3rem;
    }
    @media (max-width: 635px) {
        width: 100%;
    }
`

export const ProductImg = styled.img`
    width: 80%;
    height: 80%;
    object-fit: contain;
`
export const ProductInfoHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 18px;
        color: #515151;
    }
    span{
        color: #515151;
    }
`
export const Desc = styled.article`
margin-top: 20px;
    color: #515151;
    line-height: 1.7;
`