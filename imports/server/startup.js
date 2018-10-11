import { Meteor } from 'meteor/meteor';
import '/imports/api/collections.js';
import {Mongo} from 'meteor/mongo';
import { Accounts } from "meteor/accounts-base";
import '/imports/api/payments.js';
//import { Instamojo } from "meteor/instamojo:instamojo"
Accounts._options.forbidClientAccountCreation = false;
Meteor.startup(() => {
  mojo = Instamojo('fb3357b1db8222b57e744ff42a928a0a', '735d3d883b6670f5f609b9399feb9298',"https://test.instamojo.com/api/1.1/ ")
  });

Meteor.methods({
  createPaymentRequest : function(payload){
    var response = mojo.createRequest(payload);
    return response;
}
});
