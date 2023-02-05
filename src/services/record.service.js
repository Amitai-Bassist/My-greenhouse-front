import { httpService } from './http.service.js'

const C1_STORAGE_KEY = 'c1'
const C2_STORAGE_KEY = 'c2'

export const recordService = {
    startSession,
    getRecordsDbA,
    getRecordsDbB
}

async function startSession(){
    return httpService.post('start')
}
async function getRecordsDbA(){
    return httpService.get(C1_STORAGE_KEY)
}
async function getRecordsDbB(){
    return httpService.get(C2_STORAGE_KEY)
}