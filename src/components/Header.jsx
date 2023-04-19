import Container from './Container';
import {NavLink as RouterLink} from 'react-router-dom';

const Header = () => {

    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''} hover:underline hover:text-gray-600 transition duration-300 `
    }

    return <Container className="bg-blue-300">
        <nav className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-small rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
        <RouterLink className={getClassName} to="/">List of Blogs</RouterLink>
            <RouterLink className={getClassName} to="/create">Generate Post</RouterLink>
            
        </nav>  
    </Container>
}

export default Header;