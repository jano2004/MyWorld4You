import './Logout.css'
import {logoutUser} from '../Back-End/DatabaseConnection.js';

function Logout() {
    const handleLogout = () => {
        logoutUser();
    };

    return (
        <div>
            <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;