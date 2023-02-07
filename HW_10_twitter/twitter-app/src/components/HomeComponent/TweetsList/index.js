import { KZ_IMG_PATH, NFACT_IMG_PATH } from "../images"
import Tweet from "./Tweet"

export default function TweetsList(){
    const tweets=[
        {
            authorName:'Free KZ today',
            authorUserName:'@kz',
            img: KZ_IMG_PATH,
            content:'Update: Alibek says he has not considered becoming...',
            retweets:1000,
            replies:200,
            likes:500

        },

        {
            authorName:'nFactorial',
            authorUserName:'@nFactorial',
            img: NFACT_IMG_PATH,
            content:'nFactorial...',
            retweets:100000,
            replies:20000,
            likes:50000

        },
        {
            authorName:'nFactorial',
            authorUserName:'@nFactorial',
            img: NFACT_IMG_PATH,
            content:'nFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorialnFactorial',
            retweets:100000,
            replies:20000,
            likes:50000

        }
,
        {
            authorName:'nFactorial',
            authorUserName:'@nFactorial',
            img: NFACT_IMG_PATH,
            content:'nFactorial...',
            retweets:100000,
            replies:20000,
            likes:50000

        }



    ]
    return tweets.map((item,index)=> <Tweet {...item} key={index}/>)



}