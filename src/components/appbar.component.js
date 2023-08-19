import React, { useEffect, useState } from "react";
import img_todo from "../assets/todo.png";

export default function Appbar() {
    const [theme, setTheme] = useState(() => {
        // Retrieve theme from local storage when the component mounts
        const storedTheme = localStorage.getItem("theme");
        return storedTheme || "medium"; // Default to "medium" if no theme is stored
    });

    useEffect(() => {
        // Save the current theme to local storage
        localStorage.setItem("theme", theme);

        // Apply the current theme class to the document
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <header>
            <div className="logo">
                <img src={img_todo} alt="todo" />
                <span>To Do List</span>
            </div>

            <div className="themeSelector">
                <span
                    onClick={() => setTheme("light")}
                    className={
                        theme === "light" ? "light activeTheme" : "light"
                    }
                ></span>
                <span
                    onClick={() => setTheme("medium")}
                    className={
                        theme === "medium" ? "medium activeTheme" : "medium"
                    }
                ></span>
                <span
                    onClick={() => setTheme("dark")}
                    className={theme === "dark" ? "dark activeTheme" : "dark"}
                ></span>
                <span
                    onClick={() => setTheme("gradientOne")}
                    className={
                        theme === "gradientOne"
                            ? "gradientOne activeTheme"
                            : "gradientOne"
                    }
                ></span>
                <span
                    onClick={() => setTheme("gradientTwo")}
                    className={
                        theme === "gradientTwo"
                            ? "gradientTwo activeTheme"
                            : "gradientTwo"
                    }
                ></span>
                <span
                    onClick={() => setTheme("gradientThree")}
                    className={
                        theme === "gradientThree"
                            ? "gradientThree activeTheme"
                            : "gradientThree"
                    }
                ></span>
            </div>
        </header>
    );
}
