
const Input = ({extraClass, type, placeholder, name}) => {
  return (
      <input required className={`text-[18px] w-full text-[#00000099] font-normal py-[23px] pl-[20px] rounded-[6px] outline-none border-[1px] border-[#00000033] mb-[25px] ${extraClass}`} type={type} placeholder={placeholder} name={name} />
  )
}

export default Input
