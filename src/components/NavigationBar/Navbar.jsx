import { Home, MoneyOutlined, Search, Whatshot } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Stack
        bgcolor="#141414"
        className="mobile-menu"
        sx={{ height: "100vh", width: "70px" }}
      >
        <Link to="/">
          <Home sx={{ fontSize: 40, color: "#fff" }} className="menu-icon" />
        </Link>
        <Link to="/trending-today">
          <Whatshot
            sx={{ fontSize: 40, color: "#fff" }}
            className="menu-icon"
          />
        </Link>
        <Link to="/top-rated">
          <MoneyOutlined
            sx={{ fontSize: 40, color: "#fff" }}
            className="menu-icon"
          />
        </Link>
        <Link to="/search">
          <Search sx={{ fontSize: 40, color: "#fff" }} className="menu-icon" />
        </Link>
      </Stack>
    </div>
  );
}

export default Navbar;
