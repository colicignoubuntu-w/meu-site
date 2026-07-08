import {
  Container,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

import { useParams } from "react-router-dom";

import products from "../../data/products";


function Product() {

  const { id } = useParams();


  const product = products.find(
    (item) => item.id === Number(id)
  );


  if (!product) {
    return (
      <Typography>
        Produto não encontrado
      </Typography>
    );
  }


  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
    >

      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          height: 500,
          objectFit: "contain",
        }}
      />


      <Typography
        variant="h3"
        sx={{
          mt: 4,
          fontWeight: "bold",
        }}
      >
        {product.name}
      </Typography>


      <Typography
        variant="h5"
        color="primary"
        sx={{
          mt: 2,
        }}
      >
        R$ {product.price.toFixed(2)}
      </Typography>


      <Button
        variant="contained"
        sx={{
          mt: 4,
        }}
      >
        Comprar
      </Button>

    </Container>
  );
}


export default Product;