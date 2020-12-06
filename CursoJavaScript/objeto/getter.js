const log = ['teste']
const obj = {
    get latest () {
        if (log.length == 0) { // return undefined
            return log[log.length - 1]
        } 
    }
}

console.log(obj.latest)