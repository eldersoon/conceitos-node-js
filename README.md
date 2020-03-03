# conceitos-node-js
Teste de conceitos do nodeJs - desafio rocketseat

## **Steps to test**
1. run *npm install*;
2. import *insomnia.json* to your insomnia;
3. run the server with *yarn dev*;
4. now test in insomnia.

#### BASE_URL
http://localhost:3333

### create
*/projects*
in request body, pass id, title and tasks(array) -> tasks: []

for example:
 {
   "id": "1",
   "title": "Project 1",
   "tasks": []
 }

### show all 
*/projects*
show all projects in projects array

### show one
*/projects/id*
show an expecific project

### delete
*/projects/id*
delete an expecific project