import { Component } from 'react'
import {ShowRecords} from '../cmps/ShowRecords'

import {recordService} from '../services/record.service'

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
                    <ShowRecords tmp='5' humid='10' radiation='17'></ShowRecords>
                </div>
                <div>
                    <div>C2</div>                   
                    <img src={androidScreen} alt="" />
                    <ShowRecords tmp='5' humid='10' radiation='17'></ShowRecords>
                </div>
            </section>
        )
    }
}