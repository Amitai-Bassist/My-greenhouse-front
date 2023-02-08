
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    saveLocalUser,
    getLoggedinUser
}

function saveLocalUser() {
    const user = {
      _id: 123454,
      fullname: 'Old MacDonald'
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
  }