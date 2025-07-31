
const Button = ({titel, extraClass}) => {
  return (
    <button className={`py-[18px] hover:bg-[#8accf5] duration-300 cursor-pointer w-full text-[18px] text-[#FFFFFF] font-bold bg-[#1DA1F2] rounded-[76px] ${extraClass}`}>{titel}</button>
  )
}

export default Button
