# Models

### User

 - **email** 
 - **password hash**
 - **user guid**
 - **name**
 - second name
 - **age** 
 - [*events*] he created
 - [*events*] he joined
 - [*reviews*] on him
 - [*reviews*] he gave
 - rating he has 
 - [*places*] he owns
 - [*places*] he visited


### Event
 - **guid**
 - **name**
 - **date and time**
 - **price**
 - **place**
 - **sport**
 - **number people needed**
 - **number people joined** (can be evaluated through joined users collection)
 - **difficulty**
 - **description**
 - [*joined users*]

### Place
 - **name**
 - **guid**
 - **location**
 - **prices**
 - **pictures**
 - **description**
 - **work time**
 - reviews / rating

### Review
 - **guid**
 - ***Author*** (auto generated and linked)
 - **Date and Time**
 - **Rating**
 - **Text**

### Join Request
 - **guid**
 - ***Author***
 - **Date and time created**
 - Notes
 - **event**
 - **Approved/Disapproved time**

### Message (in talks / chat), used for persistent messages
 - ***Author***
 - **Date and time created**
 - **Text**

[brackets] -  a collection </br>
*italic*  - another model </br>
**bold** - required </br>

