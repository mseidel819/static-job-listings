import {
  Grid,
  Card,
  CardMedia,
  Container,
  SvgIcon,
  Typography,
} from "@mui/material";

const JobCard = ({ job }) => {
  console.log(job);
  return (
    <Card
      sx={{
        boxShadow: "0px 15px 20px -5px rgba(13, 113, 130, 0.15)",
        marginBottom: "24px",
      }}
    >
      <Grid container>
        <Grid item container sm={6}>
          <Grid item>
            <SvgIcon>{job.logo}</SvgIcon>
          </Grid>

          <Grid item container>
            <Grid item>
              <Typography variant="h3">{job.company}</Typography>
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h2">{job.position}</Typography>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              {job.postedAt}
            </Grid>
            <Grid item xs={4}>
              {job.contract}
            </Grid>
            <Grid item xs={4}>
              {job.location}
            </Grid>
          </Grid>
        </Grid>

        <Grid item container sm={6}>
          right side
        </Grid>
      </Grid>
    </Card>
  );
};
export default JobCard;
