import { Meteor } from 'meteor/meteor';
import '/imports/api/collections.js';
import { Accounts } from "meteor/accounts-base";
//import { Instamojo } from "meteor/instamojo:instamojo"
Accounts._options.forbidClientAccountCreation = false;
Meteor.startup(() => {
  mojo = Instamojo('fb3357b1db8222b57e744ff42a928a0a', '735d3d883b6670f5f609b9399feb9298',"https://test.instamojo.com/api/1.1/ ")

  });
