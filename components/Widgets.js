import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import Contact from "./Contact";

function Widgets() {
  const contacts = [
    { src: "/images/jeff-bezos.jpg", name: "Jeff Bezoz" },
    { src: "/images/elon_musk.jpg", name: "Elon Musk" },
    { src: "/images/bill_gates.jpeg", name: "Bill Gates" },
    { src: "/images/mark_zuckerberg.jpg", name: "Mark Zuckerberg" },
    { src: "/images/harry_potter.jpg", name: "Harry Potter" },
    { src: "/images/queen.webp", name: "The Queen" },
    { src: "/images/james_bond.jpg", name: "James Bond" },
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
