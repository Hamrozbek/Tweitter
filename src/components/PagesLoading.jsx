import { logoIcon } from "../assets/images"

const PagesLoading = () => {
  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 flex justify-center items-center">
        <img className="loading-img" src={logoIcon} alt="logo" width={80} height={80} />
    </div>
  )
}

export default PagesLoading
