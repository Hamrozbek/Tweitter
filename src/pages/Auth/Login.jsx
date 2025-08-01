import { useState } from "react"
import { Loading, logoIcon } from "../../assets/images"
import { Button, Heading, Input, Textp } from "../../components"
import { useCookies } from "react-cookie";

const Login = () => {
  const [_cookies, setCookie] = useCookies(['token']);
  const [loading, setLoading] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    setTimeout(() => {
      setCookie("token", data)
    }, 1000)
  }
  return (
    <>
      <div className="w-[450px] mx-auto pt-[60px]">
        <img src={logoIcon} alt="logo img" width={50} height={41} />
        <Heading tag={"h1"} extraClass={"!py-[36px]"} title={"Log in to Twitter"} />
        <form onSubmit={handleLogin} autoComplete="off">
          <Input type={"text"} placeholder={"Phone number, email address"} name={"email"} />
          <Input type={"password"} placeholder={"Password"} name={"password"} />
          <Button>
            {loading ? <img className="mx-auto scale-[2]" src={Loading} alt="loading" width={26} height={25} /> : "Log In"}
          </Button>
        </form>
        <div className="flex justify-between pt-[40px]">
          <a href="">
            <Textp title={"Forgot password?"} />
          </a>
          <a href="">
            <Textp title={"Sign up to Twitter"} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Login
