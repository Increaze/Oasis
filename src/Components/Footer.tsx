import { CiLock } from 'react-icons/ci'

function Footer(){
    return(
        <div className='flex justify-center gap-x-1'>
              <CiLock/>
              <span className="text-center text-xs mt-0.5">Your Info is safely secured</span>
              </div>
    )
}
export default Footer;
