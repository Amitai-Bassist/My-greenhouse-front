
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY_A = 'dbA'

export const recordsService = {
    query,
    save,
}

async function query(db) {
    return httpService.get(db)
}

async function save(record) {
    var savedRecord
    if (record._id) {
        // savedRecord = await storageService.put(STORAGE_KEY, record)
        savedRecord = await httpService.put(`record/${record._id}`, record)

    } else {
        // Later, owner is set by the backend
        // record.owner = userService.getLoggedinUser()
        // savedRecord = await storageService.post(STORAGE_KEY, record)
        savedRecord = await httpService.post('record', record)
    }
    return savedRecord
}





