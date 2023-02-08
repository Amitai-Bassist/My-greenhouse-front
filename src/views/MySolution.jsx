import { Component } from 'react'
import backendArchitecture from '../assets/imgs/backend-architecture.png'
export class MySolution extends Component {
    render() {
        return (
            <section className='container app-view'>
                <div>The problem:</div>
                <div>My implementation:</div>
                <img src={backendArchitecture} alt="" />
                <div>backend:</div>
            </section >
        )
    }
}    