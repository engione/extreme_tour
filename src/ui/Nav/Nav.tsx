import nav from "./Nav.module.scss"
import "./NavActive.scss"
type TProps = {
    children: React.ReactNode
}

export const Nav = ({children} : TProps) => {
    return (
        <nav className={nav.nav}>
            {children}
        </nav>
    );
};
