import { CommenIcon, LikeIcon, RepostIcon, StatisticIcon, UploadIcon } from '../assets/icons'

const PostItem = ({item}) => {
    return (
        <div className="flex gap-[15px] p-5 border-b-[1px] border-[#D8D8D8]">
            <img className="w-[60px] h-[60px]" src={item.img} alt="img" width={60} height={60} />
            <div className="w-[85%]">
                <div className="flex gap-[5px] mb-[5px] items-center">
                    <strong className="font-bold text-[20px]">{item.username}</strong>
                    <p className="text-[#000000] text-[18px] opacity-[60%]">{item.email}</p>
                </div>
                <p className="text-[18px] text-[#000000] mb-[15px]">{item.content}</p>
                {item.postImg && <img className="w-full rounded-[20px] h-[453px]" src={item.postImg} alt="post img" />}
                <div className="items-center mt-[22px] flex justify-between">
                    <div className="flex gap-[10px] items-center">
                        <CommenIcon />
                        <span>{item.commentCount}</span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <RepostIcon />
                        <span>{item.repostCount}</span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <LikeIcon />
                        <span>{item.likeCount}</span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <UploadIcon />
                        <span>{item.uploadCount}</span>
                    </div>
                    <div className="flex gap-[10px] items-center">
                        <StatisticIcon />
                        <span>{item.staticCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem
