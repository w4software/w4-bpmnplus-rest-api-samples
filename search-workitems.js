/*
 * This sample retrieves workitems (aka. inbox) for a given user using
 * W4 BPMN+ REST API and the right set of filters
 */  

var w4restapi = require('./w4restapi');

/** User for which we want to get tasks */
var user = 'admin';

w4restapi.call({
  authUser: 'admin',
  authPassword: 'admin',
  method: 'GET',
  path: '/activityInstances',
  parameters:
  {
    'filter.class': 'UserTaskInstanceFilter',
    'filter.activityInstanceState': 'ACTIVE',
    'filter.orFilters.0.0.class': 'ActualOwnerFilter',
    'filter.orFilters.0.0.userNamePattern': user,
    'filter.orFilters.0.1.class': 'ActualOwnerFilter',
    'filter.orFilters.0.1.userIsPresent': 'false',
    'filter.orFilters.0.1.andFilters.0.class': 'UserFilter',
    'filter.orFilters.0.1.andFilters.0.userNamePattern': user,
    'filter.orFilters.0.1.andFilters.0.userFilterType': 'EFFECTIVE_SUBSTITUTE',
    'filter.orFilters.0.2.class': 'UserTaskInstanceFilter',
    'filter.orFilters.0.2.andFilters.0.class': 'PotentialOwnerFilter',
    'filter.orFilters.0.2.andFilters.0.orFilters.0.0.class': 'UserFilter',
    'filter.orFilters.0.2.andFilters.0.orFilters.0.0.userNamePattern': user,
    'filter.orFilters.0.2.andFilters.0.orFilters.0.1.class': 'GroupFilter',
    'filter.orFilters.0.2.andFilters.0.orFilters.0.1.andFilters.0.class': 'UserFilter',
    'filter.orFilters.0.2.andFilters.0.orFilters.0.1.andFilters.0.userNamePattern': user,
    'filter.orFilters.0.2.notFilters.0.class': 'ExcludedOwnerFilter',
    'filter.orFilters.0.2.notFilters.0.orFilters.0.0.class': 'UserFilter',
    'filter.orFilters.0.2.notFilters.0.orFilters.0.0.userNamePattern': user,
    'filter.orFilters.0.2.notFilters.0.orFilters.0.1.class': 'GroupFilter',
    'filter.orFilters.0.2.notFilters.0.orFilters.0.1.andFilters.0.class': 'UserFilter',
    'filter.orFilters.0.2.notFilters.0.orFilters.0.1.andFilters.0.userNamePattern': user,
    'filter.orFilters.0.2.userTaskInstanceHasActualOwner': 'false',
  }  
});
