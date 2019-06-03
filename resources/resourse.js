const roles = ['manager', 'writer', 'guest', 'admin'];
let adminPage =  (role => {
    for(let i = 0; i< role.length; i++){
        if(role[i] && role[i] === 'admin' || role[i] === 'manager') {
            return true;
        }
    }
    return false;
});

let homePage = (role => {
    for (let i = 0; i< role.length; i++){
        if(role[i] && roles.includes(role[i])) {
            return true;
        }
    }
    return false;


});

module.exports = {
    adminPage: adminPage,
    homePage: homePage
}