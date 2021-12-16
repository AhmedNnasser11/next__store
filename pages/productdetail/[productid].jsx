import Head from "next/head";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import {useRouter} from "next/router"
import Footer from "../../components/Footer/Footer"

import {
  GridItem,
  Desc,
  GridInfo,
  ProductDetails,
  ProductImg,
  ProductInfoHeader,
} from "../../styles/ProductInfoStyle";

const ProductDetail = ({ product }) => {

  const router = useRouter()

  if(router.isFallback){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductDetails>
        <Container>
          <GridInfo>
            <GridItem>
              <ProductImg src={product.img} />
            </GridItem>
            <GridItem>
              <ProductInfoHeader>
                <h2>{product.title}</h2>
                <span>${product.price}</span>
              </ProductInfoHeader>
              <Desc>{product.desc}</Desc>
              <Button
                className="add_to_cart"
                variant="outlined"
                startIcon={<ShoppingCart />}
              >
                Add To Cart
              </Button>
            </GridItem>
          </GridInfo>
        </Container>
      </ProductDetails>
      <Footer />
    </>
  );
};

export default ProductDetail;

export async function getStaticPaths() {
  const productsRes = await fetch(
    "https://api.npoint.io/b26ab1faa1fc63f27d5d/HotProducts"
  );
  const products = await productsRes.json();
  const paths = products.map(post => {
    return{
      params:{
        productid: `${post.id}`
      }
    }
  })
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const productRes = await fetch(
    `https://api.npoint.io/b26ab1faa1fc63f27d5d/HotProducts/${params.productid}`
  );
  const data = await productRes.json();

  return {
    props: {
      product: data,
    },
  };
}
