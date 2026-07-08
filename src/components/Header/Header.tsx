import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Header() {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1400px",
          width: "100%",
          mx: "auto",
          py: 1,
          display: "flex",
          gap: 4,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#111",
            minWidth: 180,
          }}
        >
          Minha Loja
        </Typography>

        {/* Pesquisa */}
        <TextField
  size="small"
  fullWidth
  placeholder="O que você está procurando?"
  slotProps={{
    input: {
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      ),
    },
  }}
/>

        {/* Ícones */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>

          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>

          <IconButton>
           <ShoppingCartOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;