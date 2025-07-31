import { logoIcon } from "../../assets/images"
import { Heading, Input, Text } from "../../components"

const Login = () => {
  return (
    <>
      <div className="w-[450px] mx-auto pt-[60px]">
        <img src={logoIcon} alt="logo img" width={50} height={41} />
        <Heading type={"h1"} extraClass={"!py-[36px]"} title={"Log in to Twitter"} />
        <Input />
        <div className="flex justify-between pt-[40px]">
          <a href="">
            <Text title={"Forgot password?"} />
          </a>
          <a href="">
            <Text title={"Sign up to Twitter"} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Login
