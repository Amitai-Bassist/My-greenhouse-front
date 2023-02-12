
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'



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
        savedRecord = await httpService.put(`dbB/${record._id}`, record)

    } else {
        // Later, owner is set by the backend
        // record.owner = userService.getLoggedinUser()
        // savedRecord = await storageService.post(STORAGE_KEY, record)
        savedRecord = await httpService.post('dbB', record)
    }
    return savedRecord
}





