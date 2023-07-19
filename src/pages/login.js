import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <NavLink className="login" to="http://localhost:8080/auth/google">Login with Google</NavLink>
    )
}