import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
  borderBottom: "2px solid transparent",
  transition: "all 0.5s ease-out",
  ":hover": {
    borderBottom: "2px solid white",
  },
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={rightLink}
            >
              {"Summary"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/education"
              sx={rightLink}
            >
              {"Education"}
            </Link>

            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/work"
              sx={rightLink}
            >
              {"Work Experience"}
            </Link>

            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/skills"
              sx={rightLink}
            >
              {"Skills"}
            </Link>

            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/more"
              sx={rightLink}
            >
              {"More..."}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
