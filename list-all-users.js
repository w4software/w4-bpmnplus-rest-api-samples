/*
 * This test shows how to list all users of W4 BPMN+ using REST API  
 */  

var w4restapi = require('./w4restapi');

w4restapi.call({
  authUser: 'admin',
  authPassword: 'admin',
  method: 'GET',
  path: '/users',  
});