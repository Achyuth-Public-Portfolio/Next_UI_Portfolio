"use client";

import React from "react";
import "@/css";
import { TypewriterEffectSmooth } from "components/ui/TypeWriterEffect";

interface wordType {
  text: string;
}

const words: wordType[] = [
  {
    text: "Hello 🙋‍♂️,",
  },
  {
    text: "I'm Achyuth!",
  },
];

const HeroBanner = () => {
  return (
    <div className="hero_banner">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
};

export default HeroBanner;
