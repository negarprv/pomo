import { Box, Typography } from "@mui/material";
import Setting from "./Setting";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h4">
        Pomo
      </Typography>
      <Setting />
    </Box>
  );
};

export default Header;
