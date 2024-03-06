"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  const buttonClicked = (event: any) => {
    console.log("Clicked the button");
  };

  return (
    <main>
      <div>
        <h2>This is Achyuth's portfolio website 2</h2>
      </div>
    </main>
  );
}
