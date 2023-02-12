import task from '../../assets/imgs/task.png'

export function Task() {
    return (
        <section>
            <div>The Task:</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/w_N93qSCq-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>System overview</h1>
            <ul>
                <li>Given a system with two independent databases : A,B.</li>
                <li>Database A has three records, which consequently update with new data.</li>
                <li>Database B in turn, is synchronised with database A, and holds the exact same
                three records.</li>
                <li>The communication between DB A and B is reliable in 90% of the time.</li>
                <li>In 10% of the time B can't be synchronised with A, and therefore, B is allowed to
                update the three records on its own.</li>
                <li>Once the connection is back A and B should be synchronised with the most relevant
                state.</li>
            </ul>
            <img src={task} alt="" />
            <h1>Task</h1>
            <ol>
                <li>Build the described above system, such that : two independent clients ,C1 and C2,
                    which can modify and display the records in databases A and B, respectively (each
                    client have its DB).</li>
                <li>Add random and automatic record updates.</li>
                <li>Implement the synchronisation mechanism, taking into account the communication
                    reliability.</li>
            </ol>
            <h1>Nots</h1>
            <ul>
                <li>This is an open task, so you can make you decisions regarding the implementation.</li>
                <li>A preferred developing languages are React and NodeJS.</li>
                <li>Good luck.</li>
            </ul>
        </section>
    )
}