# RBAC
Role-based access control (RBAC) is a policy-neutral access-control mechanism defined around roles and privileges. The components of RBAC such as role-permissions, user-role and role-role relationships make it simple to perform user assignments.

System: this is the application entry point. 

How to run :

$npm install --save

$node System.js


Files

================

RBAC.js: this is role based access control application.

roles.js: within a system, roles are created for various operations.

permissions.js: they represents the power to perform certain operations on a resource and are assigned to specific roles within a system.

operations.js: what can a user do with that permission, usually, read write, delete.

resource.js : The Resource in this implementation is strictly restricted to role.Only who has specific role to access the Resource can only access the resource.
