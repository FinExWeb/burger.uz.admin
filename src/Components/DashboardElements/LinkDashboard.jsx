import { NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'
const Link = (props) => {
    return (
        <Container>
            <NavLink className={'nav-link'} to={props.href}>
                {props.children}
            </NavLink>
        </Container>
    )
}

export default Link;