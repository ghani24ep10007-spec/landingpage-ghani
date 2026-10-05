import { cp, copyFile, mkdir, rm } from "node:fs/promises";

const output = new URL("./dist/", import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ["index.html", "styles.css", "favicon.svg", "robots.txt", "sitemap.xml", "_headers"]) {
  await copyFile(new URL("./" + file, import.meta.url), new URL("./dist/" + file, import.meta.url));
}

await cp(new URL("./assets/", import.meta.url), new URL("./dist/assets/", import.meta.url), { recursive: true });
await cp(new URL("./src/assets/images/", import.meta.url), new URL("./dist/src/assets/images/", import.meta.url), { recursive: true });

