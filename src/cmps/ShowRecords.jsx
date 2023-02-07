export function ShowRecords({tmp,humid,radiation}) {
    return (
            <section className='ShowRecords '>
                <div>
                    <h1>Temperature</h1>           
                    <div>{tmp}</div>  
                    <div>°C</div>  
                    <select name="" id="">
                        <option value="">°C</option>    
                        <option value="">°F</option>    
                        <option value="">K</option>    
                    </select>       
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