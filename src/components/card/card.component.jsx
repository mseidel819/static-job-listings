import { Grid, Card, Typography } from "@mui/material";

import { StyledButton, TitleButton } from "./card.styles";

const JobCard = ({ job, addSearch }) => {
  return (
    <Card
      sx={{
        boxShadow: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
        marginBottom: "24px",
        padding: "32px 40px",
      }}
    >
      <Grid container>
        <Grid item container sm={5} rowSpacing={1}>
          <Grid item container columnSpacing={1}>
            <Grid item>
              <Typography variant="h3">{job.company}</Typography>
            </Grid>
            <Grid item>
              {job.new && (
                <Typography
                  variant="h4"
                  sx={{
                    backgroundColor: "#5CA5A5",
                    color: "white",
                    borderRadius: "1000px",
                    padding: "5px 10px",
                  }}
                >
                  NEW
                </Typography>
              )}
            </Grid>
            <Grid item>
              {job.featured && (
                <Typography
                  variant="h4"
                  sx={{
                    backgroundColor: "#2B3939",
                    color: "white",
                    borderRadius: "1000px",
                    padding: "5px 10px",
                  }}
                >
                  FEATURED
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid item>
            <TitleButton>{job.position}</TitleButton>
          </Grid>
          <Grid item container>
            <Grid item xs={2}>
              {job.postedAt}
            </Grid>
            <Grid item xs={2}>
              {job.contract}
            </Grid>
            <Grid item xs={2}>
              {job.location}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          sm={7}
          container
          justifyContent="flex-end"
          sx={{
            textAlign: "center",
          }}
        >
          <StyledButton onClick={() => addSearch(`${job.role}`)}>
            {job.role}
          </StyledButton>
          <StyledButton onClick={() => addSearch(`${job.level}`)}>
            {job.level}
          </StyledButton>
          {job.languages.map((lang, i) => (
            <StyledButton onClick={() => addSearch(`${lang}`)} key={i}>
              {lang}
            </StyledButton>
          ))}
          {job.tools.map((tool, i) => (
            <StyledButton onClick={() => addSearch(`${tool}`)} key={i}>
              {tool}
            </StyledButton>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};
export default JobCard;
