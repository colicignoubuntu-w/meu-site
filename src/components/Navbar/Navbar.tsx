import { Box, Button, Container } from "@mui/material";

const categorias = [
  "Feminino",
  "Masculino",
  "Infantil",
  "Calçados",
  "Acessórios",
  "Promoções",
];

function Navbar() {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #e5e5e5",
        backgroundColor: "#fff",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          py: 1,
          flexWrap: "wrap",
        }}
      >
        {categorias.map((categoria) => (
          <Button
            key={categoria}
            color="inherit"
            sx={{
              fontWeight: 600,
            }}
          >
            {categoria}
          </Button>
        ))}
      </Container>
    </Box>
  );
}

export default Navbar;