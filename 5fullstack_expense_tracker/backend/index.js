const express=require('express');
const cors=require('cors');

const expense=require('./models/expense')
const db=require('./utils/dbconnection')
const expenseroutes=require('./routes/expenseroutes')
const app=express();
const port=4000;
// Middleware
app.use(cors());
app.use(express.json());
app.use('/',expenseroutes); // Use the expense routes with the prefix /expenses
app.use('/users',(req,res)=>{
    res.send('User route');
});

db.sync({alter:true}).then(()=>{
    console.log('Database synced');
    app.listen(port,()=>{
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch((err)=>{
    console.error('Error syncing database:',err);
}); 
