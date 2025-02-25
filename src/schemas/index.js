const Activity = require('./Activity')
const ActivityEvent = require('./ActivityEvent')
const User = require('./User')


const schemas = {
    Activity,
    ActivityEvent,
    'injects': {
        'Authentication': {
            User
        }
    }
}

module.exports = schemas;