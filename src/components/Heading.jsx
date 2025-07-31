
const Heading = ({ type, title, extraClass }) => {
    if (type == "h1") {
        return <h1 className={`${extraClass} text-[42px] text-[#00000] font-bold`} >{title}</h1>
    } else if (type == "h2") {
        return <h2 className={`${extraClass} text-[24px] text-[#000000] font-bold`} >{title}</h2>
    } else if (type == "h3") {
        return <h3 className={`${extraClass} text-[20px] text-[#000000] font-semibold`} >{title}</h3>
    }
}

export default Heading
