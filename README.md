[![msg91-sms Logo](https://github.com/scionoftech/msg91-sms/blob/Development/image/msg.gif)](https://www.npmjs.com/package/msg91-sms)

[msg91-sms v1.0.1](https://www.npmjs.com/package/msg91-sms)

A small [node.js](http://nodejs.org) library for msg91 sms api.


For more info visit [MSG91](https://msg91.com/)

For Text SMS API docs [Text SMS](http://api.msg91.com/apidoc/textsms/send-sms.php)

For Voice SMS API docs [Voice SMS](http://api.msg91.com/apidoc/voicesms/send-using-draft.php)

## Requirements 

* postURL : For india use 'https://api.msg91.com/api/sendhttp.php' and For Global use 'https://world.msg91.com/api/sendhttp.php'

* authkey : Login Authentication Key(This key is unique for every user)

* number : single mobile number (Keep number in international format)

* numbers : array of mobile numbers (Keep numbers in international format)

* message : Message Content to send

* senderid : Receiver will see this as sender's ID

* route : If your operator supports multiple routes then give one route name. Eg: route=1 for promotional, route=4 for transactional SMS.

* dialcode : 0 for international, 91 for India, 1 for USA

* date & time : when you want to schedule the SMS to be sent. Time format will be yyyy-MM-dd & HH:mm:ss

* senderno : Sender Mobile No

* duration : Call duration

* schtimestart : when you want to schedule the SMS to be sent. Time format will be yyyy-MM-dd & HH:mm:ss

* schtimeend : when you want to schedule the SMS to be sent. Time format will be yyyy-MM-dd & HH:mm:ss


## Installation

```bash
$ npm install msg91-sms
```


## How to use

### Text SMS

#### Send sms
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//message
var message='';

//Sender ID
var senderid='';

//Route
var route='';

//Country dial code
var dialcode='';


  //send to single number

msg91.sendOne(postURL,authkey,number,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);
});

//send to multiple numbers

msg91.sendMultiple(postURL,authkey,numbers,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```

#### Send sms with unicode
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//message
var message='';

//Sender ID
var senderid='';

//Route
var route='';

//Country dial code
var dialcode='';


//send to single number

msg91.sendOnewithUnicode(postURL,authkey,number,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.sendMultiplewithUnicode(postURL,authkey,numbers,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```

#### Send flash message
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//message
var message='';

//Sender ID
var senderid='';

//Route
var route='';

//Country dial code
var dialcode='';


//send to single number

msg91.sendOnewithFlash(postURL,authkey,number,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.sendMultiplewithFlash(postURL,authkey,numbers,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```

#### Send sms and get json response
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//message
var message='';

//Sender ID
var senderid='';

//Route
var route='';

//Country dial code
var dialcode='';


//send to single number

msg91.sendOneandGetJson(postURL,authkey,number,message,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.sendMultipleandGetJson(postURL,authkey,numbers,messages,senderid,route,dialcode,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```

#### Schedule sms
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//message
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

//Schedule message
//date should be yyyy-MM-dd time should be HH:mm:ss (24H format)

//send to single number

msg91.scheduleOne(postURL,authkey,number,message,senderid,route,dialcode,date,time,function(response){


//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.scheduleMultiple(postURL,authkey,numbers,message,senderid,route,dialcode,date,time,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```

#### Schedule sms with unicode
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//message
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

//Schedule message
//date should be yyyy-MM-dd time should be HH:mm:ss (24H format)

//Schedule message
//date should be yyyy-MM-dd time should be HH:mm:ss (24H format)

//send to single number

msg91.scheduleOnewithUnicode(postURL,authkey,number,message,senderid,route,dialcode,date,time,function(response){


//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numbers

msg91.scheduleMultiplewithUnicode(postURL,authkey,numbers,message,senderid,route,dialcode,date,time,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```

#### Send sms to Group
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//message
var message='';

//Sender ID
var senderid='';

//group id of group
var groupid='';


msg91.sendtoGroup(postURL,authkey,message,senderid,groupid,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```
### Voice SMS

#### Send voice sms using draft file
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//Route
var route='';

//Name of the Draft file
var draft_file_name='';

//Name of the folder
var campaign='';

//Call duration
var duration='';

//sender mobile no
var senderno='';

//when you want to schedule voice sms
//date should be yyyy-MM-dd and time should be HH:mm:ss (24H format)
var schtimestart='2015-11-13 09:00:00';
var schtimeend='2015-12-13 23:42:20';


//send to single number

msg91.sendOneVoiceSmsusingDraft(postURL,authkey,number,draft_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numebrs

msg91.sendMVoiceSmsusingDraft(authkey,numbers,draft_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```

#### Send voice sms using draft file
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//Route
var route='';

//URL path of the file
var url_file_name='';

//Name of the folder
var campaign='';

//Call duration
var duration='';

//sender mobile no
var senderno='';

//when you want to schedule voice sms
//date should be yyyy-MM-dd and time should be HH:mm:ss (24H format)
var schtimestart='2015-11-13 09:00:00';
var schtimeend='2015-12-13 23:42:20';


//send to single number

msg91.sendVoiceSmsusingUrl(postURL,authkey,number,url_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

//send to multiple numebrs

msg91.sendMVoiceSmsusingUrl(authkey,numbers,url_file_name,senderno,route,campaign,duration,schtimestart,schtimeend,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);

});

```

#### Check balance
  ```js

var msg91=require('msg91-sms');

// Post URL
var postURL='';

//Authentication Key 
var authkey='';

//Route
var route='';

msg91.checkBalance(postURL,authkey,route,function(response){

//get balance or the appropriate Error Message
console.log(response);

});

```

## License

  [MIT](LICENSE)