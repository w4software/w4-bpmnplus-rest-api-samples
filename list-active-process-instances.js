/*
 * This sample shows how to list all active process instances in a W4 BPMN+ engine using its REST API  
 */  

var w4restapi = require('./w4restapi');

w4restapi.call({
  authUser: 'admin',
  authPassword: 'admin',
  method: 'GET',
  path: '/processInstances',
  parameters: {
    'filter.processInstanceState': 'ACTIVE',
  }
});