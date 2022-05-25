import { Grid, Card, Typography } from "@mui/material";

import { StyledButton, TitleButton } from "./card.styles";

import { ReactComponent as Account } from "../../images/account.svg";
import { ReactComponent as EyeCam } from "../../images/eyecam-co.svg";
import { ReactComponent as Faceit } from "../../images/faceit.svg";
import { ReactComponent as Insure } from "../../images/insure.svg";
import { ReactComponent as LoopStudios } from "../../images/loop-studios.svg";
import { ReactComponent as Manage } from "../../images/manage.svg";
import { ReactComponent as MyHome } from "../../images/myhome.svg";
import { ReactComponent as Photosnap } from "../../images/photosnap.svg";
import { ReactComponent as Shortly } from "../../images/shortly.svg";
import { ReactComponent as TheAirFilterCompany } from "../../images/the-air-filter-company.svg";

const JobCard = ({ job, addSearch, id }) => {
  const imgArr = {
    1: <Photosnap />,
    2: <Manage />,
    3: <Account />,
    4: <MyHome />,
    5: <LoopStudios />,
    6: <Faceit />,
    7: <Shortly />,
    8: <Insure />,
    9: <EyeCam />,
    10: <TheAirFilterCompany />,
  };

  return (
    <Card
      sx={{
        boxShadow: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
        marginBottom: "24px",
        padding: "32px 40px",
      }}
    >
      <Grid container>
        <Grid item md={1.5}>
          {imgArr[id]}
        </Grid>
        <Grid item container md={4} rowSpacing={1}>
          <Grid item container alignItems="center" columnSpacing={1}>
            <Grid item>
              <Typography variant="h3" color="#5CA5A5">
                {job.company}
              </Typography>
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
            <Typography variant="body1" color="#7C8F8F">
              {job.postedAt}
            </Typography>
            <Typography
              variant="body1"
              color="#7C8F8F"
              sx={{ margin: "auto 18px" }}
            >
              &#8226;
            </Typography>
            <Typography variant="body1" color="#7C8F8F">
              {job.contract}
            </Typography>
            <Typography
              variant="body1"
              color="#7C8F8F"
              sx={{ margin: "auto 18px" }}
            >
              &#8226;
            </Typography>
            <Typography variant="body1" color="#7C8F8F">
              {job.location}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          md={6.5}
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
