var express = require('express');
var app = express();
var fs = require('fs');
var accountsRouter = require('./routes/accounts.js');

global.fileName = 'accounts.json';

app.use(express.json());
app.use('/account', accountsRouter);

app.listen(3000, function () {
    try {
        fs.readFile(global.fileName, 'utf8', (err, data) => {
            if(err){
                const initialJSON = {
                    nextID: 1,
                    accounts: []
                };
                fs.writeFile(global.fileName, JSON.stringify(initialJSON), (err) => {
                    res.status(400).send({ error: err.message });
                });
            }      
        });
        console.log('API Started');
        
    } catch (err) {
        res.status(400).send({ error: err.message });        
    }
});