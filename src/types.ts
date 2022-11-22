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

export type TagsBoxProps = {
  search: string[];
  removeHandler: (value: string) => void;
  clearHandler: () => void;
};

export type JobCardProps = {
  job: Job;
  addSearch: (value: string) => void;
  id: number;
};
