var msg91=require('./msg91.js');

//Psot Url
var postURL='http://world.msg91.com/api/sendhttp.php';
// Some Post URL //
// Sample - http://api.msg91.com/api/sendhttp.php or http://world.msg91.com/api/sendhttp.php
// sample - http://api.msg91.com/api/balance.php or http://world.msg91.com/api/balance.php
// Sample - http://api.msg91.com/send_voice_mail.php or http://world.msg91.com/send_voice_mail.php


//Authentication Key
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

var message='';

//Sender ID
var senderid='';

//Route
var route='';

//Country dial code
var dialcode='';

//date and time if sheduled message
//date should be yyyy-MM-dd and time should be HH:mm:ss (24H format)
var date='2015-11-22';
var time='20:19:20';

//Name of the Draft file
var draft_file_name='';

//Name of the folder
var campaign='';

//URL path of the file
var url_file_name='';

//group id of group
var groupid='';

//sender mobile no
var senderno='';

//when you want to schedule voice sms
//date should be yyyy-MM-dd and time should be HH:mm:ss (24H format)
var schtimestart='2015-11-13 09:00:00';
var schtimeend='2015-12-13 23:42:20';


//******************************************Send sms**********************************************//

//send to single number

msg91.sendOne(postURL,authkey,number,message,senderid,route,dialcode,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});

//send to multiple numbers

/*msg91.sendMultiple(postURL,authkey,numbers,message,senderid,route,dialcode,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//******************************************Send sms with unicode**********************************************//

//send to single number

/*msg91.sendOnewithUnicode(postURL,authkey,number,message,senderid,route,dialcode,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//send to multiple numbers

/*msg91.sendMultiplewithUnicode(postURL,authkey,numbers,message,senderid,route,dialcode,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/


//******************************************Send flash message**********************************************//

//send to single number

/*msg91.sendOnewithFlash(postURL,authkey,number,message,senderid,route,dialcode,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//send to multiple numbers

/*msg91.sendMultiplewithFlash(postURL,authkey,numbers,message,senderid,route,dialcode,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//******************************************Send sms and get json response**********************************************//

//send to single number

msg91.sendOneandGetJson(postURL,authkey,number,message,senderid,route,dialcode,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});

//send to multiple numbers

/*msg91.sendMultipleandGetJson(postURL,authkey,numbers,messages,senderid,route,dialcode,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//******************************************Schedule sms**********************************************//

//Schedule message
//date should be yyyy-MM-dd time should be HH:mm:ss (24H format)

//send to single number

/*msg91.scheduleOne(postURL,authkey,number,message,senderid,route,dialcode,date,time,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//send to multiple numbers

/*msg91.scheduleMultiple(postURL,authkey,numbers,message,senderid,route,dialcode,date,time,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//******************************************Schedule sms with unicode**********************************************//

//Schedule message
//date should be yyyy-MM-dd time should be HH:mm:ss (24H format)

//send to single number

/*msg91.scheduleOnewithUnicode(postURL,authkey,number,message,senderid,route,dialcode,date,time,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//send to multiple numbers

/*msg91.scheduleMultiplewithUnicode(postURL,authkey,numbers,message,senderid,route,dialcode,date,time,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//*******************************************Voice sms***************************************************//

//---------send using draft file

//send to single number

/*msg91.sendOneVoiceSmsusingDraft(postURL,authkey,number,draft_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//send to multiple numebrs

/*msg91.sendMVoiceSmsusingDraft(postURL,authkey,numbers,draft_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//-------------send using url of file

//send to single number

/*msg91.sendVoiceSmsusingUrl(postURL,authkey,number,url_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//send to multiple numebrs

/*msg91.sendMVoiceSmsusingUrl(postURL,authkey,numbers,url_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//*************************************************************Send to Group******************************************************//

/*msg91.sendtoGroup(postURL,authkey,message,senderid,groupid,function(response){

    //Returns Message ID, If Sent Successfully or the appropriate Error Message
    console.log(response);

});*/

//******************************************************check balance****************************************************//

/*msg91.checkBalance(postURL,authkey,route,function(response){

    //get balance or the appropriate Error Message
    console.log(response);

});*/