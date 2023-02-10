import { Component } from 'react'
import {recordsService} from '../services/records.service'

export class ClientUpdate extends Component {
    state = {
        temperature: '',
        humidity: '',
        radiation: ''
    }

    onUpdate(){
        recordsService.save(
            {
                _id: '63e33d2d36e9a97bfa9173d2',
                temperature: this.state.temperature,
                humidity: this.state.humidity,
                radiation: this.state.radiation  
            }
        )
    }

    render() {
        
        return (
            <section className='ShowRecords '>
                <div>
                    <h1>Temperature</h1>           
                    <input type="text" />  
                    <div>°C</div>  
                    <select name="" id="">
                        <option value="">°C</option>    
                        <option value="">°F</option>    
                        <option value="">K</option>    
                    </select>       
                </div>
                <div>
                    <h1>Humidity</h1>           
                    <input type="text" /> 
                    <div>%</div>          
                        
                </div>
                <div>
                    <h1>Radiation</h1>          
                    <input type="text"/> 
                    <div>Par</div>               
                </div>
                <button>Update</button>
            </section>
        )
    }
}