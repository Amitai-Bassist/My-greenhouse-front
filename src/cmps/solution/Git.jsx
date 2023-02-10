import  Render  from "../../assets/imgs/render.png"
import  atlas  from "../../assets/imgs/atlas.png"

export function Git() {
    return (
        <section className="links">
            <h1>Links to my code and cloud</h1>

            <ul>
                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>Git:
                <li>
                    <div>
                        Front in React, using- scss, axios, react-router-dom  
                        <a href="https://github.com/Amitai-Bassist/My-greenhouse-front" target="_blank"> Front</a>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> 
                    </div>
                </li>
                <li>
                    <div>
                        Back server with Node.js, using- express, mongoDB-  
                        <a href="https://github.com/Amitai-Bassist/My-greenhouse-backend" target="_blank"> Backend</a>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
                    </div>
                </li>
                <li>
                    <div>
                        Backend worker server with Node.js, using- express, mongoDB- <br />
                        Responsible for pushing the data to database A and also for 
                        the synchronization between A and B  
                        <a href="https://github.com/Amitai-Bassist/My-greenhouse-backend-workers" target="_blank"> Backend-worker</a>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
                    </div>
                </li>
                <img src="https://res.cloudinary.com/dht4wwjwe/image/upload/v1676030145/img3egovxgzfwdevnil0.png" alt="cloud" width="40" height="40"/>
                Clouds:
                <li>
                    <div>
                        Render platform for hosting servers and websites-
                        <a href="https://render.com/" target="_blank">render</a><br/>
                        <a href="https://res.cloudinary.com/dht4wwjwe/image/upload/v1675979808/drfoynxs7wfenmxmlrou.png" target="_blank">
                            screenshot of my render dashboard</a>
                    </div>
                </li>
                <li>
                    <div>
                        Atlas cloud for MongoDB-
                        <a href="https://render.com/" target="_blank">Atlas</a><br/>
                        <a href="https://res.cloudinary.com/dht4wwjwe/image/upload/v1675979808/l3iphg8nenfgqlzs3tcn.png" target="_blank">
                            screenshot of my Atlas dashboard
                        </a>
                    </div>
                </li>
                <li>
                    <div>
                        Cloudinary cloud for media-
                        <a href="https://cloudinary.com/" target="_blank">Cloudinary</a><br/>
                        <a href="https://res.cloudinary.com/dht4wwjwe/image/upload/v1676025019/ln2apy3sbrvumdheti5c.png" target="_blank">
                            screenshot of my Cloudinary dashboard
                        </a>
                    </div>
                </li>

            </ul>
        </section>
    )
}