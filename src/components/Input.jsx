import Button from "./Button"

const Input = ({extraClass}) => {
  return (
    <form autoComplete="off">
      <input className={`text-[18px] w-full text-[#00000099] font-normal py-[23px] pl-[20px] rounded-[6px] outline-none border-[1px] border-[#00000033] mb-[25px] ${extraClass}`} type="text" placeholder="Phone number, email address" name="email" />
      <input className={`text-[18px] w-full text-[#00000099] font-normal py-[23px] pl-[20px] rounded-[6px] outline-none border-[1px] border-[#00000033] mb-[25px] ${extraClass}`} type="password" placeholder="Password" name="password" />
      <Button titel={"Log In"}/>
    </form>
  )
}

export default Input
