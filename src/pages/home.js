import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <NavLink className="home" to="http://localhost:8080/logout">Logout</NavLink>
    )
}