const Expense=require('../models/expense');
const addexpense=async(req,res)=>{
    try{
        const expensedata=await Expense.create(req.body );
        res.status(201).json(expensedata);

    }
    catch(err){
        res.status(500).json({message:'Failed to add expense',error:err.message});
    }   
}
const getexpenses=async(req,res)=>{
    try{
        const expenses=await Expense.findAll(); 
        res.status(200).json(expenses);
    }
    catch(err){
        res.status(500).json({message:'Failed to retrieve expenses',error:err.message});
    }
}
const deleteexpense=async(req,res)=>{
    try{
        const id=req.params.id;
        await Expense.destroy({where:{id:id}});
        res.status(200).json({message:'Expense deleted successfully'});
    }
    catch(err){
        res.status(500).json({message:'Failed to delete expense',error:err.message});
    }
}
const updateexpense=async(req,res)=>{
    try{
        const id=req.params.id;
        await Expense.update(req.body,{where:{id:id}});
        res.status(200).json({message:'Expense updated successfully'});
    }
    catch(err){
        res.status(500).json({message:'Failed to update expense',error:err.message});
    }   
}
module.exports={addexpense,getexpenses,deleteexpense,updateexpense};