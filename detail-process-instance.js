/*
 * This sample shows how to display some details of a W4 BPMN+ process instance using REST API.
 * A process instance identifier should be given as an argument on command line. You may find
 * one using list-active-process-instances.js
 */  

var w4restapi = require('./w4restapi');

if (!process.argv[2])
{
  console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' <process_instance_identifier>');
  process.exit(1);
}

var processInstanceIdentifier = process.argv[2];

w4restapi.call({
  authUser: 'admin',
  authPassword: 'admin',
  method: 'GET',
  path: '/processInstance/' + processInstanceIdentifier,
  parameters:
  {
    'attachment.activityInstancesAttached': 'true',
    'attachment.businessAdministratorsAttached': 'true',
    'attachment.conversationNodeInstanceIdentifiersAttached': 'true',
    'attachment.dataEntriesAttached': 'true',
    'attachment.eventInstancesAttached': 'true',
    'attachment.gatewayInstancesAttached': 'true',
    'attachment.potentialInitiatorsAttached': 'true',
    'attachment.stakeholdersAttached': 'true',
  }  
});