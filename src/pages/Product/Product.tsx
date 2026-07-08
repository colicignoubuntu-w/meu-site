import {
  Container,
  Typography,
  Button,
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
      <Container sx={{ py: 8 }}>
        <Typography>
          Produto não encontrado
        </Typography>
      </Container>
    );
  }


  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
    >

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 6,
          alignItems: "center",
        }}
      >


        {/* Imagem */}
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "100%",
            height: 550,
            objectFit: "contain",
            borderRadius: 3,
          }}
        />



        {/* Informações */}
        <Box>

          <Chip
            label={product.category}
            sx={{
              mb: 2,
            }}
          />


          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
            }}
          >
            {product.name}
          </Typography>


          <Typography
            variant="h4"
            color="primary"
            sx={{
              mt: 3,
              fontWeight: "bold",
            }}
          >
            R$ {product.price.toFixed(2)}
          </Typography>



          <Typography
            variant="body1"
            sx={{
              mt: 3,
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            {product.description}
          </Typography>



          <FormControl
            fullWidth
            sx={{
              mt: 4,
            }}
          >

            <InputLabel>
              Tamanho
            </InputLabel>


            <Select
              label="Tamanho"
              defaultValue=""
            >

              {product.sizes.map((size) => (
                <MenuItem
                  key={size}
                  value={size}
                >
                  {size}
                </MenuItem>
              ))}

            </Select>

          </FormControl>



          <Typography
            sx={{
              mt: 3,
              fontWeight: "bold",
            }}
          >
            Cor:
          </Typography>


          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 1,
            }}
          >

            {product.colors.map((color) => (
              <Chip
                key={color}
                label={color}
              />
            ))}

          </Box>



          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              mt: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
            }}
          >
            Adicionar ao carrinho
          </Button>


        </Box>


      </Box>

    </Container>
  );
}


export default Product;