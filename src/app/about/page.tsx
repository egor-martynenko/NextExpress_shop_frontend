import React from 'react';
import path from "node:path";
import fs from "fs/promises";

export default async  function About() {

  const getParsedData = async () => {
    const filePath = path.join(process.cwd(), "public", "data.json");
    try {
      const data = await fs.readFile(filePath)
      return JSON.parse(data.toString());
    }catch(err) {
      console.log(err);
      return {title: "No Title"};
    }
  }
  const {title} = await getParsedData();
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <span> {title}</span>
    </div>
  );
};
