REST API Sample for W4 BPMN+
============================

Description
-----------

This project show some example usage of the REST API of W4 BPMN+ Engine.
                                                                        

Usage
-----

This project is mainly designed for you to look at the sources and learn
how you can retrieve some information or do some actions on W4 BPMN+ Engine
using its REST API, exposed by default on its port 7705.

Nevertheless, all tests can be run if you have a W4 BPMN+ Engine available
locally and Node.js installed. If you wish to run them, first run the following
to get the dependencies

    npm install

Then run tests using node, for example

    node list-all-users

Some other tests require you to have some definitions to be deployed in the
engine. You can edit the javascript variables present at the beginning of the
test to map it on a process you already have.

    node instanciate-process-instance


License
-------

Copyright (c) 2014, W4 S.A. 

This project is licensed under the terms of the MIT License (see LICENSE file)

Ce projet est licencié sous les termes de la licence MIT (voir le fichier LICENSE)
