export type RepoUrls = {
  name: string;
  description: string;
  imageUrl: string;
  repoUrl: string;
};

const baseUrl = [
  "https://github.com/vignexshh/folio",
  "https://github.com/vignexshh/ewents-now",
  "https://github.com/vignexshh/algorithims-learning-track",
];

export const repos: RepoUrls[] = baseUrl.map((url) => {
  const { pathname } = new URL(url); // "/vignexshh/folio"
  const [, username, project] = pathname.split("/");

  return {
    name: `${username}/${project}`,
    description: "Repo description one",
    imageUrl: `https://opengraph.githubassets.com/1/${username}/${project}`,
    repoUrl: url,
  };
});