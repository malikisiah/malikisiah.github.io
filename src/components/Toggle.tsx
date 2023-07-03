"use client";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);
  const [theme, setTheme] = useState("black");

  const toggle = () => {
    setTheme(theme === "black" ? "lofi" : "black");
  };

  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Switch
      checked={enabled}
      onChange={() => {
        setEnabled(!enabled);
        toggle();
      }}
      className={`${
        enabled ? "bg-black" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}
