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
