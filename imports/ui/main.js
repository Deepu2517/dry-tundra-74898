import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from "meteor/accounts-base";
import { Router } from 'meteor/iron:router';
import {Mongo} from 'meteor/mongo';
import '/imports/api/payments.js';
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
Router.route('/payment',function(){
  this.render('paymentM');
});
//Accounts
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
Template.user_content.helpers({username:function(){
  if(Meteor.user())
  {
   console.log(Meteor.userId());
   return Meteor.user().emails[0].address
    }
  else
  {
  return "Login to continue";
   }
}
});
Template.user_content.events({
'click #payment-btn':function(){
   Router.go('/payment');
 }
});
Template.paymentM.events({
  'submit .payload-js':function(event){
    var payload={
    purpose:"A Unique Identifier",
    amount: event.target.amount.value ,
    phone:event.target.mobile.value ,
    buyer_name: "John Doe",
    redirect_url:'http://localhost:3000',
    send_email: false,
    send_sms: false,
    email: Meteor.user().emails[0].address,
    allow_repeated_payments: false
  };
  Meteor.call("createPaymentRequest",payload,function(error,response){
    if(error){
        alert("Request Failed")
    }else{
        window.location = response.payment_request.longurl
    }
   });
   //return false;

    console.log(payload);
    //Payload.insert(payload);
    return false;
  },
/*'click .payrequest':function(){
  payload=Payload.findOne({amount:"event.target.amount.value"});
  //console.log(payload);
  Meteor.call("createPaymentRequest",payload,function(error,response){
    if(error){
        alert("Request Failed")
    }else{
        window.location = response.payment_request.longurl
    }
   });
   return false;
 }*/
});
