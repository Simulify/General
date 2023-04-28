import { useState } from 'react';
import FormSettings from './FormSettings';
import Navbar from '../components/Navbar';

function ProfilePage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // send the form data to the backend using fetch or axios
        console.log({
            email,
            username
        });
    };

    const handleCancel = () => {
        //  add cancel logic 
        console.log('Cancelled');
    };

    return (
        <div className="ProfilePage">
            <Navbar label='Parametres'/>
            <FormSettings/>
            <form onSubmit={handleSubmit}>
                <div className='ProfileContainer'>
                    <div className='inputs'>
                        <div className="Email">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="Username">
                            <label htmlFor="username">Nom d'utilisateur</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="TwoButtons">
                        <button className='sauvegarder' type="submit">Sauvegarder</button>
                        <button className='annuler' type="button" onClick={handleCancel}>Annuler</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProfilePage;
