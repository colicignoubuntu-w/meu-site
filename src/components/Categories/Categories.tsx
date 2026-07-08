import {
  Container,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import CategoryCard from "../CategoryCard/CategoryCard";
import categories from "../../data/categories";


function Categories() {
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
          fontWeight: 700,
          mb: 4,
        }}
      >
        Categorias
      </Typography>


      <Grid
        container
        spacing={4}
      >
        {categories.map((category) => (
          <Grid
            key={category.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <CategoryCard
              name={category.name}
              image={category.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


export default Categories;