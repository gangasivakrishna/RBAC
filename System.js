const readline = require('readline-sync');

const RBAC = require('./RBAC/RBAC.js');
const rbac = new RBAC();
const message = "Role Based Auth System\n" +
    "=====================\n" +
    "1 Assign a role to user \n" +
    "2 Remove a user from the role\n" +
    "3 Check resource access for user\n" +
    "4 Check permission access for user\n" +
    "5 Check user role\n" +
    "6 Exit\n"
    ;

choice = readline.question(message);

if (choice == 1) {
    rbac.addUserRoles('cheeku', ['guest', 'manager']);
} else if (choice == 2) {
    rbac.deleteUserfrmRole('cheeku', 'writer');
} else if (choice == 3) {
    rbac.accessResourse('gsk', 'homePage');
} else if (choice == 4) {
    rbac.isAllowed('gsk', 'write');
} else if (choice == 5) {
    rbac.checkUserRole('cheeku', 'writer');
} else {
    console.log("choose correct option");
}

