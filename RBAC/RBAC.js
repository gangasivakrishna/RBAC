var users = require('../users/users.js');
var roles = require('../roles/roles.js');

function RBAC() {

}

RBAC.prototype.addUserRoles = async function (user, role) {
    if (Array.isArray(role)) {
        console.log(users.addRole(user, role));
    } else {
        console.log("role param should be array");
    }
}

RBAC.prototype.checkUserRole = async function (user, role) {
    if (typeof (role) === 'string') {
        if (users.is(user, role)) {
            console.log(user," has ",role, " role.");
        } else {
            console.log("role doesn't exist");
        }
    } else {
        console.log("role should be in string format!!");
    }
}
RBAC.prototype.deleteUserfrmRole = async function (user, role) {
    if (typeof (role) === 'string') {
        roles.rmUserfromRole(user, role);
        console.log(users.remRole(user, role))
    } else {
        console.log("role should be in string format!!");
    }
}

RBAC.prototype.isAllowed = async function (user, permissionId) {
    if (typeof (permissionId) === 'string') {
        if (users.permissionCheck(user, permissionId)) {
            console.log(user ," is allowed to " , permissionId);
        } else {
            console.log("user doesn't have permissions")
        }
    } else {
        console.log("role should be in string format!!");
    }
}
RBAC.prototype.accessResourse = async function (user, resourseId) {
    if (typeof (resourseId) === 'string') {
        if (users.resourseAccess(user, resourseId)) {
            console.log(user, " is allowed to access " , resourseId);
        } else {
            console.log("user doesn't have permissions to access");
        }
    } else {
        console.log("role should be in string format!!");
    }
}

module.exports = RBAC;

