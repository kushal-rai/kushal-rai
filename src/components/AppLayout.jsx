import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Landing from "../pages/Landing";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

function AppLayout() {
  const [scrollDown, setScrollDown] = useState(true);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const menuItems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Portfolio",
    },
    {
      id: 4,
      title: "Contact",
    },
  ];

  useEffect(() => {
    window.onscroll = function (e) {
      e.preventDefault();
      // print "false" if direction is down and "true" if up
      setScrollDown(this.oldScroll > this.scrollY);
      this.oldScroll = this.scrollY;
    };
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* slider wrapper */}
      {/* <div className="absolute right-0 top-14 text-center flex ">
        <Switch
          className=""
          checked={darkMode}
          onCheckedChange={() => setDarkMode(!darkMode)}
        />
        <label
          htmlFor="darkModeToggle"
          className="dark-mode-toggle text-black ml-2"
        >
          Dark mode
        </label>
      </div> */}
      <header>
        <nav className={`m-auto w-[100%] z-[999] ${scrollDown ? "fixed" : ""}`}>
          <ul className="bg-primary-purple  p-3 mt-0  mx-auto flex gap-4 text-off-white justify-center shadow-md ">
            {/* mapping menu item into list */}
            {menuItems.map((item) => (
              <li key={item.id} className="hover:text-slate-300 cursor-pointer">
                <ScrollLink
                  activeClass="active"
                  to={item.title}
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={50}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Element is used by react scroll to navigate */}
      <Element name="Home">
        <Landing />
      </Element>
      <Element name="About">
        <About />
      </Element>

      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <div className="spacer wave"></div>

      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />

      {/* Button to scroll to top */}

      <button
        className="text-lg bottom-20 z-10 right-4 p-2 rounded-full bg-slate-100 bg-opacity-60  fixed"
        onClick={scrollToTop}
      >
        🔝
      </button>
    </div>
  );
}

export default AppLayout;
