import logo from "/Users/assemgul/Documents/GitHub/HW/HW_all/HW_08_09_react/media-app/src/components/img/Img.svg"
import icon from "/Users/assemgul/Documents/GitHub/HW/HW_all/HW_08_09_react/media-app/src/components/img/Icon.svg"


export default function Article({article}){
        const {title, description, image} = article;
        return(
            <sector id="acticles" className="act">
                    <div className="new_list">
                        <div className="news">
                            <div className="left">
                                <div className="top">
                                    <div className="infotop">
                                        <img className="imgg" src={logo}></img> 
                                        <p className="author_name">Authors name</p>
                                        <p className="delimeter">in</p>
                                        <p className="topic_name">Topics Name</p>
                                        <p className="delimeter_2">·</p>
                                        <p className="july">7 july</p>
                                    </div>
                                    <div className="text">
                                        <p className="desc_1">{title}</p>
                                        <p className="desc_2">{description}</p>
                                    </div>
                                        
                                </div>
                                <div className="infobottom">
                                    <div className="info">
                                        <button className="but">
                                            <label className="lab">Java Script</label>
                                        </button>
                                        <p className="min_read">12 min read</p>
                                        <p className="delimeter_3">·</p>
                                        <p className="selected">Selected for you</p>
                                    </div>
                                    <div className="actions">
                                        <img className="icons" src={icon}></img>
                                        <img className="icons" src={icon}></img>
                                        <img className="icons" src={icon}></img>
                                    </div>
                                    
                                </div>
                            </div>
                            <img className="foto" src={image}></img>
                        </div>
                    </div>


                </sector>
        )
    }