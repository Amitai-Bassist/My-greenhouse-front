import { Component } from 'react'
import greenHouse from '../assets/imgs/greenHouse.png'
import {updatesService} from '../services/backendWorker/updates.service'
import { userService } from '../services/user.service'

export class Home extends Component {
    state = {
        
    }
    componentDidMount(){
        this.connectUser()
        this.startUpdatingDb()
    }

    connectUser(){
        userService.saveLocalUser()
        
    }

    async startUpdatingDb() {
        const updateA = await updatesService.startSessionA()
        const updateB = await updatesService.startSessionB()
        if (updateB){
            console.log('updating')
        }
    }

    render() {
        return (
            <section className='container grid app-view'>
                <img className='home-img' src={greenHouse} alt="" />
                <section className='home-explain'>
                    <h1>Old MacDonald smart greenhouse- The frame story</h1>
                    <p>
                        Old MacDonald has a farm and on his farm he had a greenhouse. He wanted to 
                        improve performance - increase the harvest and improve its quality.
                    </p>
                    <p>
                        So he added sensors and made the greenhouse smart.
                    </p>
                    <p>
                        The sensors are connected to data base A which is located 
                        in the farm and connected directly to the main monitor-C1.
                    </p>
                    <p>
                        The data from A goes to data base B which is stored in the 
                        cloud. and from there the information goes directly to the 
                        Android of old MacDonalds-C2.
                    </p>
                    <p>
                        Unfortunately, 10% of the time there is a disconnection 
                        in the synchronization between the databases. In that time session 
                        he can update database B through the dashboard.
                    </p>
                    <p>
                        You are welcome to see the data flow in the dashboard and try to 
                        update database B while there is no proper connection.
                    </p>
                    <p>
                        In addition, you can see in "My-solution" all the information about my 
                        solution, the technological tools I used, the architecture of the code 
                        and videos as well as links to view the code.
                    </p>
                </section>
            </section>
        )
    }
}