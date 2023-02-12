import { Component } from 'react'
export class ShowRecords extends Component {

    render (){
        const {tmp,humid,radiation} = this.props
        return(
            <section className='ShowRecords '>
                <div>
                    <h1>Temperature</h1>           
                    <div>{tmp}</div>  
                    <div>°C</div>  
                </div>
                <div>
                    <h1>Humidity</h1>           
                    <div>{humid}</div> 
                    <div>%</div>          
                        
                </div>
                <div>
                    <h1>Radiation</h1>          
                    <div>{radiation}</div>  
                    <div>Par</div>               
                </div>
            </section>
        )
    }
    
}