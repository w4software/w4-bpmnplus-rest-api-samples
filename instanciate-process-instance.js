/*
 * This sample code shows how to initiate a process instance on W4 BPMN+
 * knowing the identifiers of the process and its definitions
 */  

var w4restapi = require('./w4restapi');

/** ID of BPMN2 definitions */
var definitionsIdentifier = 'RestDefinition';

/** ID of the BPMN2 process in definitions file */
var processIdentifier = 'Bpmn_Process_rVqmcliYEeSd7tA1xKdEJw';

w4restapi.call({
  authUser: 'admin',
  authPassword: 'admin',
  path: '/processInstance',
  method: 'POST',
  parameters:
  {
    'identifier.id': processIdentifier,
    'identifier.definitionsIdentifier.id': definitionsIdentifier,  
  }   
});