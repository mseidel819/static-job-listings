import { Card, Grid } from "@mui/material";
import { ReactComponent as Remove } from "../../images/icon-remove.svg";
import {
  ClearButton,
  ButtonLabel,
  RemoveButton,
  ButtonContainer,
} from "./tags.styles";

const TagsBox = ({ search, removeHandler, clearHandler }) => {
  return (
    <Card
      role="banner"
      sx={{ position: "relative", top: "-30px", marginBottom: "40px" }}
    >
      <Grid
        container
        sx={{
          padding: { xs: "0 5px", md: "0 40px" },
          justifyContent: { xs: "flex-start", md: "space-between" },
        }}
      >
        <Grid item container xs={9} md={10}>
          {search.map((tag, i) => (
            <ButtonContainer key={i}>
              <ButtonLabel variant="body2">{tag}</ButtonLabel>

              <RemoveButton onClick={() => removeHandler(tag)}>
                <Remove />
              </RemoveButton>
            </ButtonContainer>
          ))}
        </Grid>
        <Grid item xs={2} md={1} sx={{ alignSelf: "center" }}>
          <ClearButton variant="text" color="secondary" onClick={clearHandler}>
            Clear
          </ClearButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TagsBox;
