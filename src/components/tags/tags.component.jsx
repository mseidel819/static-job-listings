import { Card, Grid, Box, Typography } from "@mui/material";
import { ReactComponent as Remove } from "../../images/icon-remove.svg";
import { ClearButton, ButtonLabel, RemoveButton } from "./tags.styles";

const TagsBox = ({ search }) => {
  return (
    <Card sx={{ position: "relative", top: "-30px" }}>
      <Grid container justifyContent="space-between">
        <Grid item container xs={10}>
          {search.map((tag, i) => (
            <Box key={i}>
              <ButtonLabel variant="body2">{tag}</ButtonLabel>
              <RemoveButton>
                <Remove />
              </RemoveButton>
            </Box>
          ))}
        </Grid>
        <Grid item xs={1}>
          <ClearButton variant="text" color="secondary">
            Clear
          </ClearButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TagsBox;
