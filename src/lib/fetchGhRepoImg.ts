// // "use client";
// // import * as cheerio from "cheerio";

// // export async function getGithubOgImage(repoUrl: string): Promise<string | null> {
// //   const res = await fetch(repoUrl, {
// //     headers: {
// //       "User-Agent": "Mozilla/5.0", // avoid basic blocking
// //     },
// //   });

// //   if (!res.ok) {
// //     throw new Error(`Request failed: ${res.status}`);
// //   }

// //   const html = await res.text();
// //   const $ = cheerio.load(html);

// //   const ogImage = $('meta[property="og:image"]').attr("content");
// //   return ogImage || null;
// // }


// export function getGithubOgImage(owner: string, repo: string) {
//   return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
// }