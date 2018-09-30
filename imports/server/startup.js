import { Meteor } from 'meteor/meteor';
import '/imports/api/collections.js';
import { Accounts } from "meteor/accounts-base";
Accounts._options.forbidClientAccountCreation = false;
