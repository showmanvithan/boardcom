export type Repo = {
  name: string;
  description: string;
  imageUrl: string;
  repoUrl?: string;
};

export const repos: Repo[] = [
  {
    name: "vgnsh/project_one",
    description: "Repo description one",
    imageUrl: "https://opengraph.githubassets.com/1/vignexshh/folio",
    repoUrl: "https://github.com/vignexshh/folio",
  },
];