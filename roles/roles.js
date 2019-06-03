let roles = require('../models/role_model.js');

function getRoleUsers(role){
    if(roles[role]){
        return roles[role].has;
    } else {
        return fales;
    }
}

function rmUserfromRole(role, user){
    if(roles[role] && roles[role].has.indexOf(user) !== -1){
       let index = roles[role].has.indexOf(user);
       roles[role].has.splice(index,1);
       return user+" removed from the "+role;
    } else {
        return "user or role doesn't exist!!";
    }
}

module.exports = {
    getRoleUsers: getRoleUsers,
    rmUserfromRole: rmUserfromRole
};