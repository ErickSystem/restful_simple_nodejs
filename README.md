# SIMPLE API RESTFUL WITH NODEJS

## REQUIRED

- node >= v8.9.4
- npm >= 5.6.0
- MongoDB shell version >= v3.6.4
- nodemon (optional)


## CONFIG

```bash
# download dependencies of project
npm i

# install nodemon.
# More information about nodemon: https://nodemon.io/
npm install -g nodemon

```

## RUNING

```bash
# execute using node
node app.js

# execute using nodemon
nodemon app.js
```

## REQUESTS


- List all: GET `http://127.0.0.1:5000/users`

- get user: GET `http://127.0.0.1:5000/users/:id`

- create user: POST `http://127.0.0.1:5000/users`

```code
{
    "fullname": "Dic Duarte",
    "email": "dic@gmail.com",
    "password": "abc123"
}

"headers": {
    "content-type": "application/json",
    "cache-control": "no-cache"
  }

```

- update user: PUT `http://127.0.0.1:5000/users/:id`


```code
{
    "fullname": "Dic Duarte",
    "email": "dic@gmail.com",
    "password": "abc123"
}

"headers": {
    "content-type": "application/json",
    "cache-control": "no-cache"
  }

```

- delete user: DELETE `http://127.0.0.1:5000/users/:id`