import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import banner from "../../assets/images/banner.png";

function Hero() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,#fafafa 0%,#f3f3f3 100%)",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={8}
          alignItems="center"
        >
          {/* Texto */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: 3,
                mb: 2,
              }}
            >
              NOVA COLEÇÃO 2026
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              Moda que
              <br />
              acompanha
              <br />
              o seu estilo.
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 20,
                lineHeight: 1.8,
                mb: 5,
              }}
            >
              Descubra peças modernas, elegantes e confortáveis
              para todas as ocasiões. Qualidade premium com
              entrega rápida para todo o Brasil.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              mb={6}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Comprar Agora
              </Button>

              <Button
                variant="outlined"
                size="large"
              >
                Explorar Coleção
              </Button>
            </Stack>

            <Stack spacing={3}>
              <Stack direction="row" spacing={2}>
                <LocalShippingOutlinedIcon color="primary" />
                <Box>
                  <Typography fontWeight={600}>
                    Frete grátis
                  </Typography>

                  <Typography color="text.secondary">
                    Acima de R$199 para todo o Brasil
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2}>
                <AutorenewOutlinedIcon color="primary" />
                <Box>
                  <Typography fontWeight={600}>
                    Troca facilitada
                  </Typography>

                  <Typography color="text.secondary">
                    Até 30 dias após a compra
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2}>
                <SecurityOutlinedIcon color="primary" />
                <Box>
                  <Typography fontWeight={600}>
                    Pagamento seguro
                  </Typography>

                  <Typography color="text.secondary">
                    Pix, Cartão e Boleto
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          {/* Foto */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="img"
              src={banner}
              alt="Nova coleção"
              sx={{
                width: "100%",
                height: {
                  xs: 450,
                  md: 720,
                },

                objectFit: "cover",

                borderRadius: 6,

                boxShadow:
                  "0px 35px 80px rgba(0,0,0,.18)",

                transition: ".4s",

                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;