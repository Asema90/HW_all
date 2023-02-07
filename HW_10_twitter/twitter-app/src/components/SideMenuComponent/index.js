import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG } from './images'
import MenuItem from './MenuItem'
import './style.css'


export default function SideMenu(){
    const menu=[
        {
            icon: HOME_SVG,
            name: 'Home'
        },
        {
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        {
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        }



    ]
    
    
    return(

        <div className="w-25 mt-3 mx-5 side-menu">
            <img src={require('./images/Twitter.png')} className="logo-icon mb-2"></img>
            
            {menu.map((item,index)=> <MenuItem item={item} key={index}/>)}
           


        </div>
        


    )
}