import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const ClearButton = styled(Button)({
  "&:hover": {
    background: "white",

    textDecoration: "underline",
  },
});

export const ButtonLabel = styled(Typography)({
  backgroundColor: "hsl(180, 31%, 95%)",
  color: "#5CA5A5",
  borderRadius: "4px",
  padding: "5px 10px",
  margin: "auto 0",

  textTransform: "none",
});

export const RemoveButton = styled(Button)({
  backgroundColor: "#5CA5A5",
});
