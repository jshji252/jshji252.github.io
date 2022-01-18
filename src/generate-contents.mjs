import { micromark } from "micromark";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const dirMD = __dirname + "/src/contents/posts/md";
const dirJSON = __dirname + "/src/contents/contents.json";

const mdFiles = fs.readdirSync(dirMD);
let data = mdFiles.map((file) => {
  let content = fs.readFileSync(`${dirMD}/${file}`, { encoding: "utf8" });
  const { birthtime } = fs.statSync(`${dirMD}/${file}`);
  const str = birthtime.toString();
  const fullString = str.slice(0, str.indexOf(" GMT"));
  const id = birthtime.valueOf();
  content = micromark(content); // parse MD
  return {
    id,
    title: file,
    content,
    date: {
      fullString,
      year: birthtime.getFullYear(),
      month: birthtime.getMonth() + 1,
      date: birthtime.getDate(),
      timestamp: birthtime.valueOf(),
    },
  };
});

data = JSON.stringify(data); //stringify

fs.writeFile(dirJSON, data, (err) => {
  if (err) console.log(err);
  else console.log(`Contents generated successfully!`);
});
