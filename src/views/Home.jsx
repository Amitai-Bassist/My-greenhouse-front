import { Component } from 'react'
import greenHouse from '../assets/imgs/greenHouse.png'
import {updatesService} from '../services/backendWorker/updates.service'

export class Home extends Component {
    state = {
        
    }
    componentDidMount(){
        this.startUpdatingDb()
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
                        Unfortunately, every 3 minutes there is a disconnection of 
                        18 seconds {`(10% of the time)`} in the synchronization between the databases. In that time session 
                        he can update database B through his Android.
                    </p>
                </section>
            </section>
        )
    }
}