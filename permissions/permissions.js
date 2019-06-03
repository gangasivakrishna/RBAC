var permissions = require('../models/permissions_model.js');

function can(role, operation) {
    return permissions[role] && permissions[role].can.indexOf(operation) !== -1;
}
function getOps(role){
    return permissions[role];;
}
function addRole(user, role) {

}

module.exports = {
    permissions: permissions,
    can: can,
    getOps: getOps,
    addRole: addRole
};