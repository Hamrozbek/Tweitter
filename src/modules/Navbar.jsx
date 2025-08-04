import { logoIcon } from "../assets/images"
import { Button, LogOut, routList } from "../components"
import { useState } from "react"
import NavItem from "../components/NavItem"

const Navbar = () => {
    const [activNav, setActivNav] = useState("/")

    return (
        <div className="w-[253px] relative pt-[25px] pr-[15px]">
            <img className="mb-[39px]" src={logoIcon} alt="logo" width={40} height={33} />
            <nav className="flex flex-col gap-[22px]">
                {routList.map(item => <NavItem key={item.id} setActivNav={setActivNav} activNav={activNav} item={item} />)}
            </nav>
            <Button extraClass={"!mt-[30px]"} children={"Tweet"} />
            <LogOut />
        </div>
    )
}

export default Navbar
