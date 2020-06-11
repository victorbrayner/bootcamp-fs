var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.json());

app.post('/account', (req,res) => {
    let account = req.body;

    fs.readFile('accounts.json', 'utf8', (err, data) => {
        if (!err) {
            try {
                let json = JSON.parse(data);

                account = { id: json.nextID++, ...account };
                json.accounts.push(account);

                fs.writeFile('accounts.json', JSON.stringify(json), err => {
                    if (err) {
                        res.status(400).send({ error: err.message });
                    } else {
                        res.end();
                    }
                });
            } catch (err) {
                res.status(400).send({ error: err.message });
            }
        }else{
            res.status(400).send({ error: err.message });
        } 
    });
});

app.get('/account', (_, res) => {
    fs.readFile('accounts.json', 'utf8', (err, data) => {
        if (!err) {
            let json = JSON.parse(data);
            delete json.nextID;
            res.send(json);
        } else {
            res.status(400).send({ error: err.message });
        }
    
    });
});

app.listen(3000, function () {
    try {
        fs.readFile('accounts.json', 'utf8', (err, data) => {
            if(err){
                const initialJSON = {
                    nextID: 1,
                    accounts: []
                };
                fs.writeFile('accounts.json', JSON.stringify(initialJSON), (err) => {
                    res.status(400).send({ error: err.message });
                });
            }      
        });
        console.log('API Started');
        
    } catch (err) {
        res.status(400).send({ error: err.message });        
    }
});