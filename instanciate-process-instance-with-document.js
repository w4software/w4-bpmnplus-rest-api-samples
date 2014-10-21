/*
 * This sample code shows how to initiate a process instance on W4 BPMN+ with 
 * an ECI data-entry being a new document we provide and which is created on
 * W4 DSS (Document Storage Service) at the same time.  
 */  

var w4restapi = require('./w4restapi');

/** ID of BPMN2 definitions */ 
var definitionsIdentifier = 'RestDefinition';

/** ID of the BPMN2 process in definitions file */
var processIdentifier = 'Bpmn_Process_rVqmcliYEeSd7tA1xKdEJw';

/** Name of the BPMN2 dataEntry refering to an ECI subject */
var documentDataEntryName = 'document';

/** Name of the newly created document on the underlying ECI
 * (for simplicity here we generate a new name for the document each time) */
var documentFilename = 'myname' + new Date().getTime();

/** The content of the document */
var documentContent = 'The quick brown fox jumps over the lazy dog';

/** Mime-type for the document content */
var documentMimeType = 'text/plain';

/** Name of the ECI source (as configured in w4.properties in W4 BPMN+).
 *  We use here the default instance of the embedded engine (aka DSS)*/
var configEciSource = 'dss-default-source'; 

w4restapi.call({
  authUser: 'admin',
  authPassword: 'admin',
  path: '/processInstance',
  method: 'POST',
  parameters:
  {
    'identifier.id': processIdentifier,
    'identifier.definitionsIdentifier.id': definitionsIdentifier,
    'dataEntries.0.key': 'document',
    'dataEntries.0.value.class': 'eu.w4.engine.client.eci.Document',
    'dataEntries.0.value.objectDefinitionIdentifier.id': 'w4:document',
    'dataEntries.0.value.objectDefinitionIdentifier.sourceName': configEciSource,
    'dataEntries.0.value.parentFolderIdentifier.id': '-8007',
    'dataEntries.0.value.parentFolderIdentifier.sourceName': configEciSource,
    'dataEntries.0.value.name': documentFilename,
    'dataEntries.0.value.contentParts.0.name': 'part0',
    'dataEntries.0.value.contentParts.0.mimeType': documentMimeType,
    'dataEntries.0.value.contentParts.0.content': new Buffer(documentContent).toString('base64'),
    'dataEntries.0.value.contentParts.0.length': documentContent.length,   
  }   
});