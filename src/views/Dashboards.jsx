import { Component } from 'react'

import androidScreen from '../assets/imgs/androidScreen.png'
import bigScreen from '../assets/imgs/bigScreen.png'

export class Dashboards extends Component {
    state = {
        
    }
   
    render() {
        
        return (
            <section className='container flex app-view'>
                <div>
                    <div>C1</div>
                    <img src={bigScreen} alt="" />
                </div>
                <div>
                    <div>C2</div>                   
                    <img src={androidScreen} alt="" />
                </div>
            </section>
        )
    }
}