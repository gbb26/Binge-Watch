import { Home, MoneyOutlined, Search, Whatshot } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";
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
          <Tooltip title="Home" placement="right" arrow>
            <Home sx={{ fontSize: 40, color: "#fff" }} className="menu-icon" />
          </Tooltip>
        </Link>
        <Link to="/trending-today">
          <Tooltip title="Trending" placement="right" arrow>
            <Whatshot
              sx={{ fontSize: 40, color: "#fff" }}
              className="menu-icon"
            />
          </Tooltip>
        </Link>
        <Link to="/top-rated">
          <Tooltip title="Top Rated" placement="right" arrow>
            <MoneyOutlined
              sx={{ fontSize: 40, color: "#fff" }}
              className="menu-icon"
            />
          </Tooltip>
        </Link>
        <Link to="/search">
          <Tooltip title="Search" placement="right" arrow>
            <Search
              sx={{ fontSize: 40, color: "#fff" }}
              className="menu-icon"
            />
          </Tooltip>
        </Link>
      </Stack>
    </div>
  );
}

export default Navbar;
