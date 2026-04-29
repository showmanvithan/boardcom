
// lib/mdx.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPostData(slug: string) {
  const filePath = path.join(process.cwd(), "src","markdown", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return { metadata: data, content };
}