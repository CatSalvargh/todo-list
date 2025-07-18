export function setStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
}

export function getStorage(item) {
    return JSON.parse(localStorage.getItem(item))
}

export function removeStorageItem(item) {
    localStorage.removeItem(item)
}

export function clearStorage() {
    localStorage.clear()
}