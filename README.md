# fullstack

npm create vite@latest [name] -- --template react  
cd [name]  
npm install  
npm run dev

npm install [axios](https://github.com/axios/axios) (like fetch)

**NB npm-commands should always be run in the project root directory**

To run a server in dev:  
npm install json-server --save-dev  
An add to "scripts" in package.json: "server": "json-server -p3001 --watch db.json"  
npm run server

### Express  
npm install express
node_modules ls
nom update
if we start working on the project on another computer, we can install all up-to-date dependencies of the project defined in package.json by running this next command in the project's root directory: npm install

**interactive node-repl:**  
node   
typeof [object]  

### Nodemon  
npm install --save-dev nodemon  
node_modules\.bin\nodemon index.js  

to make it easier add to package.json:  
"dev": "nodemon index.js",
and then: npm run dev

**REST client**  
https://github.com/Huachao/vscode-restclient/blob/master/README.md#usage  


### Fly.io

scripts:  
..  
"build:ui": "@powershell Remove-Item -Recurse -Force dist && cd ../fullstack/part2/phonebook && npm run build && @powershell Copy-Item dist -Recurse ../../../fullstack-part3",  
"deploy": "fly deploy",  
"deploy:full": "npm run build:ui && npm run deploy",      
"logs:prod": "fly logs"  

npm run [script]

when same origin the address in frontend Services.jsx can just be **'/api/persons'**  
then frontend development doesn't work without vite.config.js:  
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    }
  },

