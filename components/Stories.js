import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Masood Mohammad",
    src: "../public/images/me_hat.jpg",
    profile: "me_hat",
  },
  {
    name: "Elon Musk",
    src: "../public/images/elon_musk.jpg",
    profile: "../public/images/elon_musk.jpg",
  },
  {
    name: "Jeff Bezoz",
    src: "../public/images/jeff-bezos.jpg",
    profile: "../public/images/jeff-bezos.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "../public/images/mark_zuckerberg.jpg",
    profile: "../public/images/mark_zuckerberg.jpg",
  },
  {
    name: "Bill Gates",
    src: "../public/images/bill_gates.jpeg",
    profile: "../public/images/bill_gates.jpeg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard key={story.name} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
