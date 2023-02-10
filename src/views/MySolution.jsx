import { Component } from 'react'
import { Git } from '../cmps/solution/Git'
import { Task } from '../cmps/solution/Task'
import { Front } from '../cmps/solution/Front'
import { Back } from '../cmps/solution/Back'




export class MySolution extends Component {
    state = {
        links: true,
        task: false,
        implementation: false,
        back: false,
        front: false
    }
    resetAll(){
        this.setState({
            links: false,
            task: false,
            implementation: false,
            back: false,
            front: false
        })
    }
    render() {
        const {links, task, implementation, back, front} = this.state
        return (
            <section className='container app-view flex my-solution'>
                <section className='side-bar'>
                    <div onClick={()=>{
                        this.resetAll()
                        this.setState({links: true})}}
                        className={links ? 'active' : null}>
                            Links to my code
                    </div>
                    <div onClick={()=>{
                        this.resetAll()
                        this.setState({task:true})}}
                        className={task ? 'active' : null}>
                            The Task
                    </div>
                    <div onClick={()=>{
                        this.resetAll()
                        this.setState({implementation: true, back: true})}}
                        className={implementation ? 'active' : null}>
                            My implementation
                            </div>
                    {(implementation) ? 
                    <div onClick={()=>{
                        this.resetAll()
                        this.setState({implementation: true, back: true})}}
                        className={back ? 'active' : null}>
                            Back servers
                    </div>
                    :null}
                    {(implementation) ?
                    <div onClick={()=>{
                        this.resetAll()
                        this.setState({implementation: true, front: true})}}
                        className={front ? 'active' : null}>
                            Front
                    </div>
                    :null}
                </section>
                <section className='solution-content'>
                    {(links) ? 
                    <Git></Git>
                    :null}
                    {(task) ? 
                    <Task></Task>
                    :null}
                    {(implementation && back) ? 
                    <section>
                        <div>My Backend implementation:</div>
                        <Back></Back>
                    </section>
                    :null}
                    {(implementation && front) ? 
                    <section>
                        <div>My Front implementation:</div>
                        <Front></Front>
                    </section>
                    :null}   
                </section>
            </section >
        )
    }
}    