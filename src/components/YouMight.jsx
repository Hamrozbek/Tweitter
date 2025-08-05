import Heading from './Heading'

const YouMight = ({tag,img, title, email,button}) => {
    return (
        <div className="flex justify-between pt-[25px]">
            <div className="flex gap-[10px]">
                <img src={img} alt="mushtary img" width={60} height={60} />
                <div>
                    <Heading tag={tag} title={title} />
                    <p className="text-[16px] text-[#000000]">{email}</p>
                </div>
            </div>
            <button className="bg-[#000000] w-[92px] rounded-[27px] text-[#FFFFFF] font-bold text-[18px]">{button}</button>
        </div>
    )
}

export default YouMight
