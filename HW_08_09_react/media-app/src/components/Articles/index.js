
import {art} from "../../data/data";
import Article from "./Article";

export default function Articles(){
    return(
        art.map((item,index)=>(
                <Article article={item} key={index}/>
            )
        )
        
        )    

    
}