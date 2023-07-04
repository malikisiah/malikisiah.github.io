"use client";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  let storedTheme = "black";
  if (typeof window !== "undefined") {
    // do localStorage stuff here
    storedTheme = localStorage.getItem("theme") || "black";
  }
  const [theme, setTheme] = useState(storedTheme);

  const toggle = () => {
    setTheme(theme === "black" ? "lofi" : "black");
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Switch
      onChange={toggle}
      className={`${
        theme === "lofi" ? "bg-black" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          theme === "lofi" ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}
