import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)({
  backgroundColor: "hsl(180, 31%, 95%)",
  color: "#5CA5A5",
  borderRadius: "4px",
  padding: "5px 10px",
  margin: "auto 0px",
  marginRight: "16px",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#5CA5A5",
    color: "hsl(180, 31%, 95%)",
  },
  "@media (max-width:600px)": {
    marginBottom: "16px",
  },
});

export const TitleButton = styled(Button)({
  fontWeight: 700,
  fontSize: "22px",
  lineHeight: "24px",
  margin: 0,
  padding: 0,
  textTransform: "none",

  "&:hover": {
    backgroundColor: "white",
    color: "#5CA5A5",
  },

  "@media (max-width:600px)": {
    fontSize: "16px",
  },
});
