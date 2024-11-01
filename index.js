const express = require('express');
const app = express();

const users = [{
    name: "John",
    kidney: [
        { health: false },
        { health: false }
    ]
}];

app.use(express.json());

app.get('/', function(req, res) {
    const userkidney = users[0].kidney;
    const numberofkidney = userkidney.length;
    let num = 0;
    for (let i = 0; i < numberofkidney; i++) {
        if (userkidney[i].health) {
            num++;
        }
    }
    const diff = numberofkidney - num;
    res.json({
        userkidney, numberofkidney, diff
    });
});

app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({ health: isHealthy });
    res.json({
        message: "Hey PostMan I have added a new kidney"
    });

});

app.put('/', function(req, res) {
    for (let i = 0; i < users[0].kidney.length; i++) {
        if(users[0].kidney[i].health){
            users[0].kidney[i].health = true;
        }
    }
    res.json({
        message: "Put request processed"
    });
});

app.delete('/', function(req, res) {
    const newkid = [];
    for (let i = 0; i < users[0].kidney.length; i++) {
        if(users[0].kidney[i].health){
            newkid.push({health : true});
        }
    }
    users[0].kidney = newkid;
    res.json({
        message: "done"
    });
});
app.listen(3000);