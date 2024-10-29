//this is server code,
//for unsplash js to work we need to set global.fetch to node fect

global.fetch = require('node-fetch')
const config = require('universal-config') //alloe=ws us to include our config details in a more elegant way
const Unsplash = require('unsplash').default //we want the dedault one as there are multiple exports for the same
const toJson = require('unsplash').toJson
const express = require('express')
const { APPLICATION_ID } = require('./config/server')


const unsplash = new Unsplash({
    application_id: config.get(APPLICATION_ID),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
})//instantiating an unsplash

const app = express();

app.get('/api/photos', (req, res) => {
    unsplash.photos.listPhoto(1, 30)
        .then(toJson)
        .then(json => res.json(json));
})

const PORT = 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))