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
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    setJobs(JobData);
  }, []);

  //role level [tools] [languages]

  useEffect(() => {
    const newFilteredJobs = jobs.filter((job) => {
      const tagArray = [job.role, job.level, ...job.tools, ...job.languages];
      console.log(tagArray);
      if (search.length === 0) {
        return job;
      }

      return search.every((element) => {
        return tagArray.includes(element);
      });
    });

    setFilteredJobs(newFilteredJobs);
  }, [jobs, search]);

  const addSearchHandler = (value) => {
    if (!search.includes(value)) {
      setSearch([...search, value]);
    }
  };

  const removeSearchHandler = (value) => {
    setSearch(search.filter((item) => item !== value));
  };

  const clearHandler = () => {
    setSearch([]);
  };

  console.log(search);
  return (
    <ThemeProvider theme={themeOptions}>
      <HeaderDesktop className="header" />
      <Container maxWidth="lg">
        {search.length > 0 && (
          <TagsBox
            search={search}
            removeHandler={removeSearchHandler}
            clearHandler={clearHandler}
          />
        )}
      </Container>
      <Container maxWidth="lg">
        {filteredJobs.map((job) => {
          return (
            <JobCard addSearch={addSearchHandler} job={job} key={job.id} />
          );
        })}
      </Container>
    </ThemeProvider>
  );
}

export default App;
