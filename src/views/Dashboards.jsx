import { Component } from 'react'
import {ShowRecords} from '../cmps/ShowRecords'

import {updatesService} from '../services/backendWorker/updates.service'
import {recordsService} from '../services/records.service'


import androidScreen from '../assets/imgs/androidScreen.png'
import bigScreen from '../assets/imgs/bigScreen.png'


export class Dashboards extends Component {
    state = {
        bWorkerOn: true,       
        aWorkerOn: true,       
    }
    
    startUpdatingDb = () => {
        // const updateA = await recordService.startSessionA()
        updatesService.startSessionA()
        updatesService.startSessionB()
        this.setState({aWorkerOn: true, bWorkerOn:true})
    }

    stopWorkerA = () => {
        updatesService.stopWorkerASession()
        this.setState({aWorkerOn: false})
    }

    stopWorkerB = () => {
        updatesService.stopWorkerBSession()
        this.setState({bWorkerOn: false})
    }

    render() {
        
        return (
            <section className='container app-view'>
                <section className=' flex '>
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
                {(this.state.bWorkerOn) ? 
                <section>
                    <div>Connection between DB-A and DB-B</div>
                    <h1>For Testing:</h1>
                    <button onClick={this.stopWorkerB}>stop B backend update worker</button>
                </section>:
                <section>
                    <div>No Connection between DB-A and DB-B</div> 
                    <h1>For Testing:</h1>
                    <button onClick={this.startUpdatingDb}>start backend workers A,B</button>
                </section>
                }
                <button onClick={this.stopWorkerA}>stop A backend worker</button>
            </section>
        )
    }
}