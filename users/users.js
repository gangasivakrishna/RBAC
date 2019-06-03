var perm = require('../permissions/permissions.js');
var resourses = require('../resources/resourse.js');
var users = require('../models/user_model.js');

function is(user, role) {
    return users[user] && users[user].is.indexOf(role) !== -1;
}
function getOps(user) {
    return users[user].is;;
}
function addRole(user, role) {
    let user_users = users[user].is;
    if (users[user] && user_users.includes(role)) {
        return "user role already exists!!";
    } else if (users[user] && !user_users.includes(role)) {
        return users[user].is.concat(role);
    } else {
        return "user doesn't exist!!";
    }

}
function remRole(user, role) {
    if (users[user] && users[user].is.indexOf(role) !== -1) {
        let index = users[user].is.indexOf(role);
        users[user].is.splice(index, 1);
        return role + " removed from the " + user;
    } else {
        return "user or role doesn't exist!!";
    }
}

function permissionCheck(user, permissionId) {
    if (users[user]) {
        let user_users = users[user].is;
        if (user_users.length > 0) {
            let permissions = perm.permissions;
            for (i = 0; i < user_users.length; i++) {
                let role = user_users[i];
                if (permissions[role].can.includes(permissionId)) {
                    return true;
                } else {
                    return false;
                }
            }

        }
    }
}

function resourseAccess(user, resourseId) {
    if (user) {
       users =  getOps(user);
       return resourses[resourseId](users);

    }
}

module.exports = {
    is: is,
    getOps: getOps,
    addRole: addRole,
    remRole: remRole,
    permissionCheck: permissionCheck,
    resourseAccess: resourseAccess
};