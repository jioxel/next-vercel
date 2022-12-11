
import { ActiveLink } from "./ActiveLink"
import styles from "./Navbar.module.css"
const menuItems:any =[
  {
    text:"Home",
    href:"/"
  },
  {
    text:"About",
    href:"/about"
  },
  {
    text:"Contact",
    href:"/contact"
  },
  {
    text:"Priging",
    href:"/pricing"
  }
]
export const Navbar = () => {

  return (
    <nav className={styles['menu-container']}>
         {menuItems.map(function(item:any,i:any){
          return <ActiveLink key={i} href={item.href} text={item.text}/>
         })}
    </nav>
  )
}