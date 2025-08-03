import { NavLink } from "react-router-dom"

const NavItem = ({item , activNav, setActivNav}) => {
    return (
        <NavLink onClick={() => setActivNav(item.path)} to={item.path} key={item.id} className={'flex items-center gap-[20px] font-semibold text-[18px] text-[#000000]'}>
            {activNav == item.path ? item.activeIcon : item.icon}
            <span>{item.title}</span>
        </NavLink>
    )
}

export default NavItem
