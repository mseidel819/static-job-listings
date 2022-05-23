import "./App.css";
import { useEffect, useState } from "react";
import { ReactComponent as HeaderDesktop } from "./images/bg-header-desktop.svg";
import { ReactComponent as HeaderMobile } from "./images/bg-header-mobile.svg";
import { Container, ThemeProvider } from "@mui/material";
import { themeOptions } from "./themes";

import JobCard from "./components/card/card.component";
import JobData from "./data.json";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(JobData);
  }, []);

  console.log(jobs);

  return (
    <ThemeProvider theme={themeOptions}>
      <HeaderDesktop className="header" />
      <Container maxWidth="lg">
        {jobs.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })}
      </Container>
    </ThemeProvider>
  );
}

export default App;
