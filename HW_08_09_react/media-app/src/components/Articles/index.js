
import logo from "/Users/assemgul/Documents/GitHub/HW/HW_all/HW_08_09_react/media-app/src/components/img/Img.svg"
import icon from "/Users/assemgul/Documents/GitHub/HW/HW_all/HW_08_09_react/media-app/src/components/img/Icon.svg"
import foto from "/Users/assemgul/Documents/GitHub/HW/HW_all/HW_08_09_react/media-app/src/components/img/foto.svg"

export default function Articles(){
    return(
        <sector id="acticles" class="act">
            <div className="new_list">
                <div className="news">
                    <div className="left">
                        <div className="top">
                            <div class="infotop">
                                <img class="imgg" src={logo}></img> 
                                <p class="author_name">Authors name</p>
                                <p class="delimeter">in</p>
                                <p class="topic_name">Topics Name</p>
                                <p class="delimeter_2">·</p>
                                <p class="july">7 july</p>
                            </div>
                            <div class="text">
                                <p class="desc_1">7 Practical CSS Tips</p>
                                <p class="desc_2">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
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
                    <img className="foto" src={foto}></img>
                </div>
            </div>

            <div className="new_list">
                <div className="news">
                    <div className="left">
                        <div className="top">
                            <div class="infotop">
                                <img class="imgg" src={logo}></img> 
                                <p class="author_name">Authors name</p>
                                <p class="delimeter">in</p>
                                <p class="topic_name">Topics Name</p>
                                <p class="delimeter_2">·</p>
                                <p class="july">7 july</p>
                            </div>
                            <div class="text">
                                <p class="desc_1">7 Practical CSS Tips</p>
                                <p class="desc_2">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
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
                    <img className="foto" src={foto}></img>
                </div>
            </div>

        </sector>



        
    )
}