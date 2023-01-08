const add = require('./add')
const read = require('./read')

const cmd = process.argv

var note = {}

if(cmd[2]) {
    note = {
        Employee: cmd[3],
        Role: cmd[4],
        Department: cmd[5]
    }
    var oldNote = read()
    add(note, oldNote)
}
if(cmd[2] == 'read') {
    present(read())
}