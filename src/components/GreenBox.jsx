import { Box } from "@mui/joy";
import { HexToRGBA } from "../lib/utils/colors";

const GreenBox = (props) => {
  const { children, ...rest } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #9ad5b7",
        padding: "1px",
        bgcolor: HexToRGBA("#9ad5b7", 0.2),
        width: { xs: 100, sm: 150, md: 250, lg: 300 },
        p: "0.5rem",
        borderRadius: "md",
        boxShadow: "lg",
      }}
    >
      {children}
    </Box>
  );
};

export default GreenBox;
