import { Component } from 'react'
import {recordsService} from '../services/records.service'

export class ClientUpdate extends Component {
    state = {
        temperature: '',
        humidity: '',
        radiation: ''
    }

    handleChange = (ev) => {
        console.log(ev.target.name)
        this.setState({[ev.target.name]: ev.target.value})
    }

    onUpdate = async (state) => {
        const update = await recordsService.save(
            {
                _id: '63e33d2d36e9a97bfa9173d2',
                temperature: state.temperature,
                humidity: state.humidity,
                radiation: state.radiation  
            }
        )
        console.log('update',update)
    }

    render() {
        
        return (
            <section className='ShowRecords '>
                <div>
                    <h1>Temperature</h1>           
                    <input name='temperature' type="text" onChange={this.handleChange} value={this.state.temperature}/>  
                    <div>°C</div>  
                    {/* <select name="" id="">
                        <option value="">°C</option>    
                        <option value="">°F</option>    
                        <option value="">K</option>    
                    </select>        */}
                </div>
                <div>
                    <h1>Humidity</h1>           
                    <input type="text" name='humidity' onChange={this.handleChange} value={this.state.humidity}/> 
                    <div>%</div>          
                        
                </div>
                <div>
                    <h1>Radiation</h1>          
                    <input type="text" name='radiation' onChange={this.handleChange} value={this.state.radiation}/> 
                    <div>Par</div>               
                </div>
                <button onClick={()=> this.onUpdate(this.state)}>Update</button>
            </section>
        )
    }
}