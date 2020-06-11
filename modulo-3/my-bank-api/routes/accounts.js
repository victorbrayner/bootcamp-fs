var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/', (req,res) => {
    let account = req.body;

    fs.readFile(global.fileName, 'utf8', (err, data) => {
        if (!err) {
            try {
                let json = JSON.parse(data);

                account = { id: json.nextID++, ...account };
                json.accounts.push(account);

                fs.writeFile(global.fileName, JSON.stringify(json), err => {
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

router.get('/', (_, res) => {
    fs.readFile(global.fileName, 'utf8', (err, data) => {
        if (!err) {
            let json = JSON.parse(data);
            delete json.nextID;
            res.send(json);
        } else {
            res.status(400).send({ error: err.message });
        }
    
    });
});

module.exports = router;