const {Router} = require("express")
const { addExpense, bulkUpload, getExpenses, updateExpense, deleteExpenses, getTotalExpensesPerMonth, getCategoryBreakdown } = require("../controllers/expense.controller")
const { Auth } = require("../middlewares/auth")
const { uploadCSV } = require("../utils/csvUpload")
const expenseRoute = Router()

expenseRoute.post("/add" , Auth ,addExpense)
expenseRoute.post('/bulk-upload', uploadCSV.single('file'), Auth , bulkUpload);
expenseRoute.get("/getdata" , Auth ,getExpenses)
expenseRoute.patch("/update/:id" , Auth , updateExpense)
expenseRoute.delete("/delete" , Auth , deleteExpenses)
expenseRoute.get("/total" , getTotalExpensesPerMonth)
expenseRoute.get("/breakdown" , getCategoryBreakdown)
module.exports = expenseRoute