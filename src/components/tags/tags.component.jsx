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
    <Card sx={{ position: "relative", top: "-30px" }}>
      <Grid container justifyContent="space-between" sx={{ padding: "0 40px" }}>
        <Grid item container xs={10}>
          {search.map((tag, i) => (
            <ButtonContainer key={i}>
              <ButtonLabel variant="body2">{tag}</ButtonLabel>

              <RemoveButton onClick={() => removeHandler(tag)}>
                <Remove />
              </RemoveButton>
            </ButtonContainer>
          ))}
        </Grid>
        <Grid item xs={1} sx={{ alignSelf: "center" }}>
          <ClearButton variant="text" color="secondary" onClick={clearHandler}>
            Clear
          </ClearButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TagsBox;
