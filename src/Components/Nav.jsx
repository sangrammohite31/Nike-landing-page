import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../contants';
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>

      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt='Logo' width={130} height={29}/>

        </a>
        <ul className='flex-1 flex gap-16  justify-center max-lg:hidden items-center'>
{navLinks.map((item,index)=>(
  

      <a key={index} href={item.href}><h1>{item.label}</h1></a>
  
 
 
      

 
))}

        </ul>
        <div>
          <img src={hamburger} alt='Hamburger' className='hidden max-lg:block'/>
        </div>
      </nav>
    </header>
  )
}

export default Nav