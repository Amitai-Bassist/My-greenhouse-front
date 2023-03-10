import { httpService } from './http.service.js'

const C1_STORAGE_KEY = 'c1'
const C2_STORAGE_KEY = 'c2'

export const updatesService = {
    startSessionA,
    startSessionB,
    getRecordsDbA,
    getRecordsDbB,
    stopWorkerASession,
    stopWorkerBSession
}

async function startSessionA(){
    httpService.post('dbA')
}

async function startSessionB(){
    httpService.post('dbB')
}

async function stopWorkerASession(){
    httpService.put('dbA')
}
async function stopWorkerBSession(){
    httpService.put('dbB')
}

async function getRecordsDbA(){
    return httpService.get(C1_STORAGE_KEY)
}
async function getRecordsDbB(){
    return httpService.get(C2_STORAGE_KEY)
}

