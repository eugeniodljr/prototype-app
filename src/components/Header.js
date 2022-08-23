import HeaderHolder from './styled/HeaderHolder.styled';
import LinkHolder from './styled/LinkHolder.styled';
// import Search from './Search';

const Header = ({state, privilege}) => {

    return(
        <nav>
            <HeaderHolder>
                <LinkHolder to='/'>Home</LinkHolder>
                {(privilege===true) && <LinkHolder to='/add-novel'>Add Novel</LinkHolder>}
                <LinkHolder to='/about'>About</LinkHolder>
                <LinkHolder to='/contact'>Contact Me</LinkHolder>
                {/* <Search state={state}/> */}

            </HeaderHolder>
        </nav>
    )
}

export default Header;