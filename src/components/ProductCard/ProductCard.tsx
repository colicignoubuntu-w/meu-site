import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";


interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}


interface ProductCardProps {
  product: Product;
}


function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >

      <CardMedia
        component="img"
        height="280"
        image={product.image}
        alt={product.name}
        sx={{
          objectFit: "cover",
        }}
      />


      <CardContent>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {product.category}
        </Typography>


        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          {product.name}
        </Typography>


        <Typography
          variant="h6"
          color="primary"
          sx={{
            mt: 1,
            fontWeight: "bold",
          }}
        >
          R$ {product.price.toFixed(2)}
        </Typography>


        <Button
          component={Link}
          to={`/produto/${product.id}`}
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Ver produto
        </Button>


      </CardContent>

    </Card>
  );
}


export default ProductCard;