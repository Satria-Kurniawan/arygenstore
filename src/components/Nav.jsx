import { useEffect, useState } from "react";
import Button from "./Button";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import BrandLogo from "../assets/logo-arygenstore.jpg";

export default function Nav() {
  const menus = ["Layanan", "Kontak"];

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList.add("dark:bg-black");

    localStorage.setItem("theme", theme);

    if (theme === "dark") return document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <nav className="sticky top-0 py-2 border-b border-primary backdrop-blur-md z-50 dark:text-white">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <section className="flex items-center gap-x-10">
          <div className="cursor-pointer rounded-full overflow-hidden">
            <Link to="Hero" smooth={true} offset={-100}>
              <img src={BrandLogo} alt="arygenstore" width="40" height="40" />
            </Link>
          </div>
          <ul className="md:flex hidden gap-x-7 font-medium">
            {menus.map((menu) => {
              return (
                <li
                  key={menu}
                  className="cursor-pointer hover:text-secondary duration-300"
                >
                  <Link to={menu} smooth={true} offset={-100}>
                    {menu}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="md:flex hidden gap-x-3">
          <Button
            variant="outlined"
            text="Light Mode"
            color="primary"
            onClick={() => setTheme("light")}
          />
          <Button
            variant="contained"
            text="Dark Mode"
            color="primary"
            onClick={() => setTheme("dark")}
          />
        </section>

        <div className="md:hidden block">
          <HiOutlineMenuAlt2
            size={25}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer"
          />
          <ul
            className={`${
              !isOpen ? "left-[100%]" : "left-0"
            } backdrop-blur-md bg-black/90 text-white p-10 top-0 absolute left-0 right-0 h-[100vh] flex flex-col justify-center items-center gap-y-10 duration-500`}
          >
            <IoClose
              size={25}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer ${!isOpen && "translate-x-72"}`}
            />
            {menus.map((menu) => {
              return (
                <li
                  key={menu}
                  className={`${
                    !isOpen && "translate-x-72"
                  } text-xl font-medium cursor-pointer hover:text-secondary duration-300`}
                >
                  <Link to={menu} smooth={true}>
                    {menu}
                  </Link>
                </li>
              );
            })}
            <li className={!isOpen && "translate-x-72"}>
              <Button
                variant="outlined"
                text="Light Mode"
                color="light"
                onClick={() => setTheme("light")}
              />
            </li>
            <li className={!isOpen && "translate-x-72"}>
              <Button
                variant="contained"
                text="Dark Mode"
                color="light"
                onClick={() => setTheme("dark")}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
