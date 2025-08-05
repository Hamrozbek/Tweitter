import { DotsIcon } from '../assets/icons'
import { AvatarImg } from '../assets/images'
import { useCookies } from 'react-cookie'

const LogOut = () => {
    const [cookies, removeCookies] = useCookies(['token'])
    function handelLogOut(){
        const isConfirm = confirm("Chiqib ketmoqchimisiz")
        if(isConfirm){
            removeCookies("token")
        }
    }

    return (
        <div className='pt-[100px] w-[100%] flex items-center gap-[10px]'>
            <img src={AvatarImg} alt="avatarimg" width={60} height={60} />
            <div>
                <strong>{cookies.token.email}</strong>
                <p>{cookies.token.email}</p>
            </div>
            <button onClick={handelLogOut} className="cursor-pointer my-auto pl-[40px]"><DotsIcon/> </button>
        </div>
    )
}

export default LogOut
