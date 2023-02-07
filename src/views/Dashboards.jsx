import { Component } from 'react'
import {ShowRecords} from '../cmps/ShowRecords'
import {SiteInf} from '../cmps/SiteInf'
import {ClientUpdate} from '../cmps/ClientUpdate'

import {updatesService} from '../services/backendWorker/updates.service'
import {recordsService} from '../services/records.service'


import androidScreen from '../assets/imgs/androidScreen.png'
import bigScreen from '../assets/imgs/bigScreen.png'


export class Dashboards extends Component {
    state = {
        queryAInterval: null,
        queryBInterval: null,
        bWorkerOn: true,       
        aWorkerOn: true,  
        dataA: {
            tmp: '5', 
            humid: '10', 
            radiation: '17'
        },
        dataB: {
            tmp: '5', 
            humid: '10', 
            radiation: '17'
        }     
    }
    
    componentDidMount(){
        this.setState({queryAInterval : setInterval(this.getARecords,500)})
        this.setState({queryBInterval : setInterval(this.getBRecords,500)})
    }

    componentWillUnmount(){
        clearInterval(this.state.queryAInterval)
        clearInterval(this.state.queryAInterval)
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

    getARecords = async () => {
        const data = await recordsService.query('dbA')
        this.setState({dataA: {
            tmp: data.temperature, 
            humid: data.humidity, 
            radiation: data.radiation
        } })
    }
    
    getBRecords = async () => {
        const data = await recordsService.query('dbB')
        if (data.temperature === this.state.dataB.tmp &&
            data.humidity === this.state.dataB.humid &&
            data.radiation === this.state.dataB.radiation){
                this.setState({bWorkerOn: false}) 
                return   
            } else if (this.state.bWorkerOn){

            } else {
                this.setState({bWorkerOn: true})  
            }
        this.setState({dataB: {
            tmp: data.temperature, 
            humid: data.humidity, 
            radiation: data.radiation
        } })
    }

    render() {
        const {dataA} = this.state
        const {dataB} = this.state
        return (
            <section className='container app-view'>
                <section className=' flex '>
                    <SiteInf></SiteInf>
                    <div>
                        <div>C1</div>
                        <img className='display-img' src={bigScreen} alt="" />
                        <ShowRecords tmp={dataA.tmp} humid={dataA.humid} radiation={dataA.radiation}></ShowRecords>
                    </div>
                    <div>
                        <div>C2</div>                   
                        <img className='display-img' src={androidScreen} alt="" />
                        <ShowRecords tmp={dataB.tmp} humid={dataB.humid} radiation={dataB.radiation}></ShowRecords>
                    </div>
                </section>
                {(this.state.bWorkerOn) ? 
                <section>
                    <div className='connect-ok'>Connection ok between DB-A and DB-B</div>
                    <h1>For Testing:</h1>
                    <button onClick={this.stopWorkerB}>stop B backend update worker</button>
                </section>:
                <section>
                    <div className='connect-disable'>No Connection between DB-A and DB-B</div> 
                    <h1>You can update DB-B here locally:</h1>
                    <ClientUpdate></ClientUpdate>
                    <h1>For Testing:</h1>
                    <button onClick={this.startUpdatingDb}>start backend workers A,B</button>
                </section>
                }
                <button onClick={this.stopWorkerA}>stop A backend worker</button>
                <button onClick={this.getARecords}>query from A</button>
            </section>
        )
    }
}