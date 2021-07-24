import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Masood Mohammad",
    src: "/images/me_hat.jpg",
    profile: "/images/me_hat.jpg",
  },
  {
    name: "Elon Musk",
    src: "/images/elon_musk.jpg",
    profile: "/images/elon_musk.jpg",
  },
  {
    name: "Jeff Bezoz",
    src: "/images/jeff-bezos.jpg",
    profile: "/images/jeff-bezos.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "/images/mark_zuckerberg.jpg",
    profile: "/images/mark_zuckerberg.jpg",
  },
  {
    name: "Bill Gates",
    src: "/images/bill_gates.jpeg",
    profile: "/images/bill_gates.jpeg",
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
