import Heading from './Heading'
import { DotsIcon } from '../assets/icons'

const TrendsItem = ({title, span, tag, element}) => {
    return (
        <div className="flex justify-between pt-[20px]">
            <div>
                <p className="text-[#393B41] text-[16px]">{element}</p>
                <Heading tag={tag} title={title} />
                <p className="text-[#393B41] text-[15px]">{span}</p>
            </div>
            <div className="pt-4">
                <DotsIcon />
            </div>
        </div>
    )
}

export default TrendsItem
