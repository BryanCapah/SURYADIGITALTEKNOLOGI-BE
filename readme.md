to run dev app : npm run dev
to run testing : npm run test --watchAll

config > config.json file example : 
{
  "development": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "mysql"
  },
  "test": {
    "username": "",
    "password": ,
    "database": "",
    "host": "",
    "dialect": "mysql"
  },
  "production": {
    "username": "",
    "password": ,
    "database": "",
    "host": "",
    "dialect": ""
  }
}

.env example : 
PORT=3030
NODE_ENV=development
HOSTNAME = localhost:3030

API_SECRET = secret
ENC_SECRET = random