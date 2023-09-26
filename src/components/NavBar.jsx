import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import favicon from "../assets/favicon.png";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const paginas = ["Iniciar Sesion", "Registrate", "Solicita un Taxi"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function NavbarIndex() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const abrirNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const cerrarNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Paper elevation={3}>
      <AppBar style={{ background: "#346BFF" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={favicon}
              style={{ width: 40, height: 40, borderRadius: 7 }}
            />

            <Typography
              style={{ padding: 10 }}
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TRANSPORTA-ME
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
              
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={abrirNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={cerrarNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {paginas.map((page) => (
                  <MenuItem key={page} onClick={cerrarNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TRANSPORTA-ME
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {paginas.map((pagina) => (
                <Button
                  key={pagina}
                  onClick={cerrarNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {pagina}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Paper>
  );
}