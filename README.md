[![msg91-sms Logo](https://github.com/scionoftech/msg91-sms/blob/Development/image/msg.gif)](https://www.npmjs.com/package/msg91-sms)

[msg91-sms v0.0.1](https://www.npmjs.com/package/msg91-sms)

A small [node.js](http://nodejs.org) library for msg91 sms api.


For more info visit [MSG91](https://msg91.com/)

For Text SMS API docs [Text SMS](http://api.msg91.com/apidoc/textsms/send-sms.php)

For Voice SMS API docs [Voice SMS](http://api.msg91.com/apidoc/voicesms/send-using-draft.php)


## How to use

  ```js

var msg91=require('msg91-sms');

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

msg91.sendOne(authkey,number,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);
});

//send to multiple numbers

msg91.sendMultiple(authkey,numbers,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//******************************************Send sms with unicode**********************************************//

//send to single number

msg91.sendOnewithUnicode(authkey,number,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.sendMultiplewithUnicode(authkey,numbers,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});


//******************************************Send flash message**********************************************//

//send to single number

msg91.sendOnewithFlash(authkey,number,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.sendMultiplewithFlash(authkey,numbers,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//******************************************Send sms and get json response**********************************************//

//send to single number

msg91.sendOneandGetJson(authkey,number,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.sendMultipleandGetJson(authkey,numbers,messages,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//******************************************Schedule sms**********************************************//

//Schedule message
//date should be yyyy-MM-dd time should be HH:mm:ss (24H format)

//send to single number

msg91.scheduleOne(authkey,number,message,senderid,route,dialcode,date,time,function(response){


//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.scheduleMultiple(authkey,numbers,message,senderid,route,dialcode,date,time,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//******************************************Schedule sms with unicode**********************************************//

//Schedule message
//date should be yyyy-MM-dd time should be HH:mm:ss (24H format)

//send to single number

msg91.scheduleOnewithUnicode(authkey,number,message,senderid,route,dialcode,date,time,function(response){


//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.scheduleMultiplewithUnicode(authkey,numbers,message,senderid,route,dialcode,date,time,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//*******************************************Voice sms***************************************************//

//---------send using draft file

//send to single number

msg91.sendOneVoiceSmsusingDraft(authkey,number,draft_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numebrs

msg91.sendMVoiceSmsusingDraft(authkey,numbers,draft_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//-------------send using url of file

//send to single number

msg91.sendVoiceSmsusingUrl(authkey,number,url_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numebrs

msg91.sendMVoiceSmsusingUrl(authkey,numbers,url_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//*************************************************************Send to Group******************************************************//

msg91.sendtoGroup(authkey,message,senderid,groupid,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});


```

## Installation

```bash
$ npm install msg91-sms
```

## License

  [MIT](LICENSE)
