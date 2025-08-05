import { SearchIcon, SetingsIcon } from "../assets/icons"
import { Mushtary, Shuhratbek } from "../assets/images"
import { Heading, Input, Textp, } from "../components"
import TrendsItem from "../components/TrendsItem"
import YouMight from "../components/YouMight"

const Sitebar = () => {
  return (
    <div className="w-[360px] h-[100vh] overflow-y-auto px-2 py-5 hide-scrollbar">
      <div className="!bg-[#EFF3F4] flex items-center gap-[15px] py-[12px] rounded-[31px] pl-[20px] mb-[20px]">
        <SearchIcon />
        <Input extraClass={"!border-none !p-0 !mb-0"} placeholder={"Search Twitter"} />
      </div>
      <div className="py-[18px] px-[15px] bg-[#F7F9F9] rounded-[10px] mb-[20px]">
        <div className="flex justify-between items-center">
          <Heading tag={"h2"} title={"Trends for you"} />
          <SetingsIcon />
        </div>
        <TrendsItem element={"Trending in Germany"} tag={"h3"} title={"Revolution"} span={"50.4K Tweets"} />
        <TrendsItem element={"Trending in Germany"} tag={"h3"} title={"Revolution"} span={"50.4K Tweets"} />
        <TrendsItem element={"Trending in Germany"} tag={"h3"} title={"Revolution"} span={"50.4K Tweets"} />
        <Textp extraClass={"!pt-[20px]"} title={"Show more"} />
      </div>
      <div className="py-[18px] px-[10px] bg-[#F7F9F9] rounded-[10px]">
        <Heading tag={"h3"} title={"You might like"} />
        <YouMight img={Mushtary} tag={"h3"} title={"Mushtariy"} email={"@Mushtar565266"} button={"Follow"}/>
        <YouMight img={Shuhratbek} tag={"h3"} title={"Shuhratbek"} email={"@mrshukhrat"} button={"Follow"}/>
        <Textp extraClass={"!pt-[20px]"} title={"Show more"} />
      </div>
      <div className="pt-[20px]">
        <p className="text-[16px] text-[#536471]">Terms of Service Privacy Policy Cookie Policy</p>
        <p className="text-[16px] text-[#536471]">Imprint Ads Info More ··· © 2021 Twitter, Inc.</p>
      </div>
    </div>
  )
}

export default Sitebar
