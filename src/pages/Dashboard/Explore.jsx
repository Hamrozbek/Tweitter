import { Heading } from '../../components'
import { ExploreIcon} from '../../assets/icons'

const Explore = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 border-b-[1px] border-[#D8D8D8]'>
        <Heading tag={"h2"} title={"Explore"} />
        <ExploreIcon/>
      </div>
      <div>
        <p className="border-b-[1px] border-[#D8D8D8]">
        </p>
      </div>
    </div>
  )
}

export default Explore
