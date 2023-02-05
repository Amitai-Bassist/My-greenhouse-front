export function ShowRecords({tmp,humid,radiation}) {
    return (
            <section className='ShowRecords '>
                <h1>Temperature</h1>           
                <div>{tmp}</div>           
                <h1>Humidity</h1>           
                <div>{humid}</div>           
                <h1>Radiation</h1>          
                <div>{radiation}</div>           
            </section>
    )
}