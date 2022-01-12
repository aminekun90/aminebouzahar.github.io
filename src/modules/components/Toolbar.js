import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  backgroundColor: "#282c34",
  [theme.breakpoints.up("sm")]: {
    height: 70,
  },
}));

export default Toolbar;
