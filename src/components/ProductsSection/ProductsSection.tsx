import {
  Container,
  Grid,
  Typography,
} from "@mui/material";

import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";


function ProductsSection() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
    >

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Produtos em destaque
      </Typography>


      <Grid
        container
        spacing={3}
      >

        {products.map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <ProductCard
              product={product}
            />
          </Grid>
        ))}

      </Grid>

    </Container>
  );
}


export default ProductsSection;