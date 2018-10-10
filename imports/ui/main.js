import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from "meteor/accounts-base";
<<<<<<< HEAD
import { Router } from 'meteor/iron:router';

//router
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function () {
  this.render('user_content',{
    to:"main"
  });
  this.render('nav',{
    to:"navbar"
  });
});


//Accounts
=======

>>>>>>> 1a27971cf1efb95d6116e8d948ef9ca96eea6942
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
<<<<<<< HEAD
Template.user_content.helpers({username:function(){
=======
Template.body.helpers({username:function(){
>>>>>>> 1a27971cf1efb95d6116e8d948ef9ca96eea6942
  if(Meteor.user())
  {
    console.log(Meteor.userId());
   return Meteor.user().emails[0].address
  }
  else
  {
<<<<<<< HEAD
  return "Login to continue";
=======
  return "Not Logged in";
>>>>>>> 1a27971cf1efb95d6116e8d948ef9ca96eea6942
  }

}
});
