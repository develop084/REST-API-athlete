const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AthleteREST',{
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(()=>{
 console.log(`Connection Successful`);
}).catch((e)=>{
 console.log(`DB Failed to connect ${e}`)
})