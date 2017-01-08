```
(\ /)
( . .) ♥   Team Lomdri presents: 
c(”)(”)
 _____             _   _               _     
/  ___|           | | | |             (_)    
\ `--. _   _ _ __ | |_| |__   ___  ___ _ ___ 
 `--. \ | | | '_ \| __| '_ \ / _ \/ __| / __|
/\__/ / |_| | | | | |_| | | |  __/\__ \ \__ \
\____/ \__, |_| |_|\__|_| |_|\___||___/_|___/
        __/ |                                
       |___/                                 
                                             
```

Install nodemon to allow for auto server restart on code change:
> npm install -g nodemon

Start the server with the following command:
> nodemon npm start

API:

_get_  
__Returns all the Pinkos__
>   /pinkos
```javascript
$.ajax({
  url: "/pinkos"
}).success(function(data) {
  // do stuff with Pinkos!
});
```

_get_  
__Returns a Pinko with id :id__
>   /pinkos/:id
```javascript
$.ajax({
  url: "/pinkos/1"
}).success(function(data) {
  // do stuff with Pinko!
});
```

_get_  
__Creates a Pinko based on Pinko with id :id1 and Pinko with id :id2__
__Returns newly crafted Pinko!__
>   /pinkos/:id1/:id2
```javascript
$.post({
  url: "/pinkos/0/2"
}).success(function(data) {
  // do stuff with new Pinko!
});
```