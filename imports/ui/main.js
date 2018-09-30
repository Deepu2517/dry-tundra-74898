import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from "meteor/accounts-base";
//import { Router } from 'meteor/iron:router';

Accounts.ui.config({
passwordSignupFields: "USERNAME_AND_EMAIL"
});

checkUser: (function(){
  if(Meteor.userId()) {
  return true;
  }
else {
  return false;
    }
});
Template.body.helpers({username:function(){
  if(Meteor.user())
  {
    console.log(Meteor.userId());
   return Meteor.user().emails[0].address
  }
  else
  {
  return "Not Logged in";
  }

}
});
