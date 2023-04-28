function Settingsbar() {
    return (
        <div className="Settingsbar">
            
            <ul className="nav-links">
            <li ><a href="/Settings/ProfilePage" className="Profile">Profile</a></li>
                <li><a href="/Settings/MotDePassePage" className="mdp">Mot De Passe </a> </li>
                
                <li><a href="/Settings/LanguePage" className="Langue">Langue </a></li>
                <li> <a href="/Settings/ModePage" className="Mode">Mode </a></li>
            </ul>
        </div>

    )
}
export default Settingsbar; 