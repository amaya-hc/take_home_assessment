# Take Home Assessment

## Getting Started
This application runs using the Deno and Hano platforms. 

To start up the server run this command in your terminal.
```
deno -A src/main.ts
```

A possible curl command could be 
```
curl -X GET http://localhost:8000/events \
-H 'Content-Type: multipart/form-data' \
-d '...' // the notebook data
```