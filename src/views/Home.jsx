import { Component } from 'react'
import {FrameStory} from '../cmps/FrameStory'
import {updatesService} from '../services/backendWorker/updates.service'
import { userService } from '../services/user.service'
import {UserNotification} from '../cmps/UserNotification'

export class Home extends Component {
    state = {
        
    }
    componentDidMount(){
        this.connectUser()
        this.startUpdatingDb()
    }

    connectUser(){
        userService.saveLocalUser()
        
    }

    async startUpdatingDb() {
        const updateA = await updatesService.startSessionA()
        const updateB = await updatesService.startSessionB()
        if (updateB){
            console.log('updating')
        }
    }

    render() {
        return (
            <section className='container grid app-view'>
                <FrameStory></FrameStory>
                <UserNotification></UserNotification>
            </section>
        )
    }
}