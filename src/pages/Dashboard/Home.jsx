import { useState } from "react"
import { ChooseImgIcon, DateIcon, GifIcon, ModeIcon, SmailkIcon, StaticIcon } from "../../assets/icons"
import { AvatarImg, kebab } from "../../assets/images"
import { Button } from "../../components"
import Heading from "../../components/Heading"
import Input from "../../components/Input"
import PostItem from "../../components/PostItem"
import { useCookies } from "react-cookie"

const Home = () => {
  const [cookies] = useCookies(['token'])
  const [chooseImg, setChooseImg] = useState(null)
  const [postList, setPostList] = useState(JSON.parse(localStorage.getItem("postList")) || [
    {
      id: 1,
      img: AvatarImg,
      username: "Designsta",
      email: "@inner · 25m",
      content: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount: 10,
      repostCount: 1,
      likeCount: 8,
      uploadCount: 0,
      staticCount: 0,
      postImg: null
    },
    {
      id: 2,
      img: AvatarImg,
      username: "cloutexhibition",
      email: "@RajLahoti · 22m",
      content: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount: 0,
      repostCount: 5,
      likeCount: 9,
      uploadCount: 0,
      staticCount: 0,
      postImg: null
    },
    {
      id: 3,
      img: AvatarImg,
      username: "CreativePhoto",
      email: "@cloutexhibition · 1h",
      content: "Обетда..... Кечиринглар",
      commentCount: 10,
      repostCount: 1,
      likeCount: 8,
      uploadCount: 0,
      staticCount: 0,
      postImg: kebab
    },
  ])

  function handelCreatPost(e) {
    e.preventDefault()
    const data = {
      id: postList[postList.length - 1].id ? postList[postList.length - 1].id + 1 : 1,
      img: AvatarImg,
      username: cookies.token.email,
      email: cookies.token.email,
      content: e.target.todo.value,
      commentCount: 0,
      repostCount: 0,
      likeCount: 0,
      uploadCount: 0,
      staticCount: 0,
      postImg: chooseImg
    }
    setPostList([data, ...postList])
    setChooseImg(null)
    e.target.reset()
  }

  localStorage.setItem("postList", JSON.stringify(postList))
  return (
    <div>
      <div className="flex justify-between items-center p-5 border-b-[1px] border-[#D8D8D8]">
        <Heading tag={"h2"} title={"Home"} />
        <ModeIcon />
      </div>
      <div className="flex relative gap-[15px] px-5 pb-5 border-b-[1px] border-[#D8D8D8]">
        <img className="w-[60px] h-[60px]" src={AvatarImg} alt="avatar img" width={60} height={60} />
        <form onSubmit={handelCreatPost} autoComplete="off" className="w-[100%] pb-[28px]">
          <Input name={"todo"} placeholder={"What’s happening"} extraClass={"!p-0 !mb-[32px] !pt-[11px] !w-[80%] !text-[#828282] font-semibold !text-[22px] !outline-none !border-none"} />
          <div className="flex items-center gap-[22px]">
            <label>
              <ChooseImgIcon />
              <input onChange={(e) => setChooseImg(URL.createObjectURL(e.target.files[0]))} className="hidden" type="file" />
            </label>
            <button type="button"><GifIcon /> </button>
            <button type="button"><StaticIcon /> </button>
            <button type="button"><SmailkIcon /> </button>
            <button type="button"><DateIcon /> </button>
          </div>
          <Button type={"submit"} extraClass={"!w-[108px] !absolute !bottom-[5px] !right-[18px]"}>Tweet</Button>
        </form>
      </div>
      <div>
        {postList.map(item => <PostItem key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default Home
