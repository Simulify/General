import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Settingsbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(getActiveLink(location.pathname));

  function getActiveLink(pathname) {
    // Extract the last part of the pathname as the active link
    const parts = pathname.split("/");
    return parts[parts.length - 1];
  }

  function handleLinkClick(event) {
    const clickedLink = event.target.dataset.link;
    setActiveLink(clickedLink);
  }

  return (
    <div className="Settingsbar">
      <ul className="nav-links">
        <li>
          <Link
            to="/Settings/ProfilePage"
            className={activeLink === "ProfilePage" ? "active" : ""}
            onClick={handleLinkClick}
            data-link="ProfilePage"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/Settings/MotDePassePage"
            className={activeLink === "MotDePassePage" ? "active" : ""}
            onClick={handleLinkClick}
            data-link="MotDePassePage"
          >
            Mot De Passe
          </Link>
        </li>
        <li>
          <Link
            to="/Settings/LanguePage"
            className={activeLink === "LanguePage" ? "active" : ""}
            onClick={handleLinkClick}
            data-link="LanguePage"
          >
            Langue
          </Link>
        </li>
        <li>
          <Link
            to="/Settings/ModePage"
            className={activeLink === "ModePage" ? "active" : ""}
            onClick={handleLinkClick}
            data-link="ModePage"
          >
            Mode
          </Link>
        </li>
      </ul>
      <div className="Settingsbar__active-line" style={{ width: activeLink === "" ? "0" : "100%" }}></div>
    </div>
  );
}

export default Settingsbar;
