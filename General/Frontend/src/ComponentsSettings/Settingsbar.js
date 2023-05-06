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

             to={`/settings/Userprofile/${localStorage.getItem('username')}`}
            className={activeLink === "ProfilePage" ? "active" : ""}

            onClick={handleLinkClick}
            data-link="Userprofile"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link

            to={`/settings/Userpassword/${localStorage.getItem('username')}`}
            className={activeLink === "MotDePassePage" ? "active" : ""}

            onClick={handleLinkClick}
            data-link="Userpassword"
          >
            Mot de passe
          </Link>
        </li>
        <li>
          <Link

            to={`/settings/Userlanguage/${localStorage.getItem('username')}`}
            className={activeLink === "LanguePage" ? "active" : ""}

            onClick={handleLinkClick}
            data-link="Userlanguage"
          >
            Langue
          </Link>
        </li>
        <li>
          <Link

             to={`/settings/Usermode/${localStorage.getItem('username')}`}
            className={activeLink === "ModePage" ? "active" : ""}

            onClick={handleLinkClick}
            data-link="Usermode"
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
