import { logoIcon, loadingHover } from "../assets/images"

const PagesLoading = ({isLoading}) => {
  return (
    <div className={`${isLoading ? "absolute" : "fixed"} right-0 left-0 top-0 bottom-0 flex justify-center items-center`}>
        <img className={` ${!isLoading && "loading-img"}`} src={isLoading ? loadingHover : logoIcon} alt="logo" width={100} height={100} />
    </div>
  )
}

export default PagesLoading
