"use client";

import { useEffect, useState } from "react";

const sections = ["home", "project", "about", "contact"];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur shadow-md">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => handleClick(section)}
            className={`px-4 py-2 text-sm rounded-full transition-all duration-300 capitalize
              ${
                activeSection === section
                  ? "bg-white text-gray-900 shadow"
                  : "text-white hover:bg-white/20"
              }`}
          >
            {section}
          </button>
        ))}
      </nav>
    </div>
  );
};
