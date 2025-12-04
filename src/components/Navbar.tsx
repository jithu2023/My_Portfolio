import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const menuItems = ["HOME", "ABOUT", "PORTFOLIO", "SERVICES"];
  const [active, setActive] = useState("HOME");
  const [highlightStyle, setHighlightStyle] = useState({});
  const refs: any = useRef({});

  useEffect(() => {
    const el = refs.current[active];
    if (el) {
      setHighlightStyle({
        width: el.offsetWidth + "px",
        left: el.offsetLeft + "px",
      });
    }
  }, [active]);

  return (
    <nav className="nav-container">

      {/* Left Logo + Name */}
      <div className="nav-left">
        <span className="star">✦</span>
        <h1 className="title">Jithu.</h1>
      </div>

      {/* Middle Menu */}
      <div className="nav-menu relative">
        {/* Sliding highlight */}
        <div
          className="absolute top-0 bottom-0 bg-white rounded-full transition-all duration-500 ease-out z-0"
          style={highlightStyle}
        ></div>

        {/* Menu items */}
        {menuItems.map((item) => (
          <a
            key={item}
            href={"#" + item.toLowerCase()}
            ref={(el) => {
              if (el) refs.current[item] = el;
            }}
            onClick={() => setActive(item)}
            className={`menu-item relative z-10 ${active === item ? "active" : ""}`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Button */}
      <button className="hire-btn">Hire Me</button>

    </nav>
  );
};

export default Navbar;
