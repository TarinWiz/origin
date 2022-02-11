import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Path = ({ path, name, ...rest }) => {
  const theme = useTheme();

  return (
    <Link href={path}>
      <a style={{ textDecoration: "none" }}>
        <Box display="flex" {...rest}>
          <Typography color={[theme.palette.white]}>{name}</Typography>
        </Box>
      </a>
    </Link>
  );
};
