import {Link} from 'react-router-dom';

function MainNavigation () {
    return <header>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/New-meetup'>Add New meetup</Link>
                </li>
                <li>
                    <Link to='/Favorites'>My Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;