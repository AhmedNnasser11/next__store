import {
  CustomCompareArrows,
  CustomCropFree,
  CustomButton,
  ProductItemContainer,
  CustomImage,
  Info,
  Title,
  Price,
  CustomHart,
  CustomButtonIcon,
  IconsContainer,
} from "./ProductItemStyle";
import { useRouter } from 'next/router'

const ProductItem = ({ product }) => {
  const router = useRouter()
  const handleRoute = () => {
    router.push(`/productdetail/${product.id}`) 
    console.log("product Detail") 
  }

  return (
    <ProductItemContainer>
      <CustomImage src={product.img} height="600px" width="500px" />
      <Info>
        <Title> {product.title} </Title> <Price> {product.price} </Price>
      </Info>
      <CustomButtonIcon>
        <CustomHart />
      </CustomButtonIcon>
      <IconsContainer onClick={handleRoute}>
        <CustomButtonIcon>
          <CustomCropFree />
        </CustomButtonIcon>
        <CustomButtonIcon className="move">
          <CustomCompareArrows />
        </CustomButtonIcon>
        <CustomButton variant="contained">Add To Cart </CustomButton>
      </IconsContainer>
    </ProductItemContainer>
  );
};

export default ProductItem;
