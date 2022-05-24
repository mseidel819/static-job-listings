import "./App.css";
import { useEffect, useState } from "react";
import { ReactComponent as HeaderDesktop } from "./images/bg-header-desktop.svg";
import { ReactComponent as HeaderMobile } from "./images/bg-header-mobile.svg";
import { Container, ThemeProvider } from "@mui/material";
import { themeOptions } from "./themes";

import JobCard from "./components/card/card.component";
import TagsBox from "./components/tags/tags.component";
import JobData from "./data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setJobs(JobData);
  }, []);

  const addSearchHandler = (value) => {
    if (!search.includes(value)) {
      setSearch([...search, value]);
    }
  };

  console.log(search);
  return (
    <ThemeProvider theme={themeOptions}>
      <HeaderDesktop className="header" />
      <TagsBox />
      <Container maxWidth="lg">
        {jobs.map((job) => {
          return (
            <JobCard addSearch={addSearchHandler} job={job} key={job.id} />
          );
        })}
      </Container>
    </ThemeProvider>
  );
}

export default App;
