import "./App.css";
import { useEffect, useState } from "react";
import { ReactComponent as HeaderDesktop } from "./images/bg-header-desktop.svg";

import { Container, ThemeProvider } from "@mui/material";
import { themeOptions } from "./themes";

import JobCard from "./components/card/card.component";
import TagsBox from "./components/tags/tags.component";
import JobData from "./data.json";

export type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

function App() {
  const [jobs, setJobs] = useState<Array<Job>>([]);
  const [search, setSearch] = useState<Array<string>>([]);
  const [filteredJobs, setFilteredJobs] = useState<Array<Job>>(jobs);

  useEffect(() => {
    setJobs(JobData);
  }, []);

  useEffect(() => {
    const newFilteredJobs = jobs.filter((job) => {
      const tagArray = [job.role, job.level, ...job.tools, ...job.languages];

      if (search.length === 0) {
        return job;
      }

      return search.every((element) => {
        return tagArray.includes(element);
      });
    });

    setFilteredJobs(newFilteredJobs);
  }, [jobs, search]);

  const addSearchHandler = (value: string) => {
    if (!search.includes(value)) {
      setSearch([...search, value]);
    }
  };

  const removeSearchHandler = (value: string) => {
    setSearch(search.filter((item) => item !== value));
  };

  const clearHandler = () => {
    setSearch([]);
  };

  return (
    <ThemeProvider theme={themeOptions}>
      <div className="header">
        <HeaderDesktop />
      </div>

      <Container maxWidth="lg">
        {search.length > 0 && (
          <TagsBox
            search={search}
            removeHandler={removeSearchHandler}
            clearHandler={clearHandler}
          />
        )}
      </Container>
      <Container
        role="main"
        maxWidth="lg"
        sx={{ marginTop: `${search.length === 0 ? "74px" : 0}` }}
      >
        {filteredJobs.map((job, i) => {
          return (
            <JobCard
              addSearch={addSearchHandler}
              job={job}
              id={job.id}
              key={job.id}
            />
          );
        })}
      </Container>
    </ThemeProvider>
  );
}

export default App;
