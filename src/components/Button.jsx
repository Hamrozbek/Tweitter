
const Button = ({children, extraClass, type}) => {
  return (
    <button type={type} className={`py-[15px] hover:bg-[#8accf5] duration-300 cursor-pointer w-full text-[18px] text-[#FFFFFF] font-bold bg-[#1DA1F2] rounded-[76px] ${extraClass}`}>{children}</button>
  )
}

export default Button
