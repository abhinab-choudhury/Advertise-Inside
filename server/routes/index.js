import express from 'express'
import path from 'path'
const appRouter = express.Router()

import createUser from './apis/createUser.js'
import getData from './apis/getData.js'

function indexPage(req, res) {
  res.end(`
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }

    .nav-bar {
      width: 100vw;
      margin: 20px 0px;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .conatiner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 20px auto;
      max-width: 70%;
    }

    h1{
      font-size: 3.0rem;
    }
    h3 {
      font-size: 2.8rem;
      text-decoration: underline;
    }

    img {
      width: 300px;
    }

    code {
      font-size: x-large;
    }
  </style>
  <title>Advertise Insight</title>
</head>

<body>
  <div class="conatiner">
    <main>
      <section>
        <h1> Advertise Insight </h1>
        <h3>Routes : </h3>
        <code>get:    '/api/'</code>
        <code>get:    'api/user_detail/'</code>
        <code>post:   '/api/create_user'</code>
        <code>patch:  '/api/update_address'</code>
        <code>patch:  '/api/update_role'</code>
        <code>delete: '/api/delete_user</code>
        <code></code>
      </section>
    </main>
  </div>
</body>

</html>
  `)
}

appRouter.get('/', indexPage)
appRouter.post('/create_user', createUser)
appRouter.get('/get_user_data', getData)

export default appRouter; 
