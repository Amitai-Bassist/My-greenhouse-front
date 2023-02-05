import { Component } from 'react'
import greenHouse from '../assets/imgs/greenHouse.png'

export class Home extends Component {
    state = {
        
    }
    render() {
        return (
            <section className='container grid app-view'>
                <img className='home-img' src={greenHouse} alt="" />
                <section className='home-explain'>

                    <div>Old MacDonald has a farm and a greenhouse. He wanted to 
                        improve performance - increase the harvest and improve its quality.
                    </div>
                    <div>
                        So he added sensors and made the greenhouse smart.
                    </div>
                    <p>The sensors are connected to data base A which is located 
                        in the farm and connected directly to the main monitor.
                    </p>
                    <p>
                    The data from A goes to data base B which is stored in the 
                    cloud and from there the information goes directly to the 
                    Android of old MacDonalds.
                    </p>
                </section>
            </section>
        )
    }
}