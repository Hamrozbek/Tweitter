import { logoIcon } from "../assets/images"
import { Button, routList } from "../components"
import { useState } from "react"
import NavItem from "../components/NavItem"

const Navbar = () => {
    const [activNav, setActivNav] = useState("/")

    return (
        <div className="w-[253px] pt-[31px] pr-[15px]">
            <img className="mb-[49px]" src={logoIcon} alt="logo" width={40} height={33} />
            <nav className="flex flex-col gap-[32px]">
                {routList.map(item =><NavItem setActivNav={setActivNav} activNav={activNav} item={item}/> )}
            </nav>
            <Button extraClass={"!mt-[45px]"} children={"Tweet"}/>
        </div>
    )
}

export default Navbar
