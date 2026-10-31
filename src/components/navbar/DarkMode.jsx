import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="cursor-pointer flex items-center">
      {theme === "dark" ? (
        <CiLight
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className={`text-xl${theme === "dark" ? "opacity-0" : "opacity-100"} `}
        />
      ) : (
        <CiDark
          className="text-xl"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      )}
    </div>
  );
};

export default DarkMode;
