let permissions = {
    manager: {
        can: ['read', 'write', 'publish']
    },
    writer: {
        can: ['read', 'write']
    },
    guest: {
        can: ['read']
    },
    admin: {
        can: ['read', 'write', 'publish']
    }
}

module.exports = permissions;