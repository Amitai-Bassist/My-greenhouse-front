export function DashboardExplain() {
    return (
        <section className='dashboard-explain'>
            <div>C1 is connecting to database A.</div>
            <div>C2 is connecting to database B.</div>
            <div>Database A is consequently update with new data from an external source.</div>
            <div>Database B is synchronized with database A.</div>
            <div>When there is no connection, database B remains out of date, 
            so it can be updated manually from here. </div>
        </section>
    )
}