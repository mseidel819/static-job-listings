import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

export const ClearButton = styled(Button)({
  "&:hover": {
    background: "white",

    textDecoration: "underline",
  },
});

export const ButtonContainer = styled("div")({
  margin: "20px 16px",
  display: "flex",
  backgroundColor: "hsl(180, 31%, 95%)",
  borderRadius: "4px",
  overflow: "hidden",
});

export const ButtonLabel = styled(Typography)({
  // backgroundColor: "hsl(180, 31%, 95%)",
  color: "#5CA5A5",
  height: "100%",
  // borderRadius: "4px",
  padding: "5px 8px",
  // margin: "auto 0",
  display: "inline-block",
  textTransform: "none",
});

export const RemoveButton = styled("button")({
  backgroundColor: "#5CA5A5",
  border: "none",
  height: "100%",
  cursor: "pointer",
});
