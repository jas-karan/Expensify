import React, { useState, useContext, useEffect } from 'react'
import "./Form.css";
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { ExpenseTrackerContext } from "../Context/context";
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../constants';
import formatDate from "../util";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from "@material-ui/lab/Alert";
import { useSpeechContext } from '@speechly/react-client';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

function Form() {
    const [formData, setFormData] = useState(initialState);
    const [open, setOpen] = useState({ isOpen: false, msg: "" });
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const { segment } = useSpeechContext();
    const [transactionSuccess, setTransactionSuccess] = useState(false);

    const createTransaction = () => {

        if (formData.type === '') {
            setOpen({ isOpen: true, msg: "was it Income or Expense?" });
            return;
        }
        else if (formData.category === '') {
            setOpen({ isOpen: true, msg: `What type of ${formData.type}?` });
            return;
        }
        else if (formData.amount === "" || Number(formData.amount) <= 0) {
            setOpen({ isOpen: true, msg: "Add some valid amount!" });
            return;
        }

        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };

        addTransaction(transaction);
        setTransactionSuccess(true);
        setFormData(initialState);
    }

    useEffect(() => {

        if (segment) {
            if (segment.intent.intent === 'add_expense') {
                setFormData({ ...formData, type: 'Expense' })
            }
            else if (segment.intent.intent === 'add_income') {
                setFormData({ ...formData, type: 'Income' })
            }
            else if (segment.isFinal && segment.intent.intent === "create_transaction") {
                return createTransaction();
            }
            else if (segment.isFinal && segment.intent.intent === "cancel__transaction") {
                return setFormData(initialState);
            }

            segment.entities.forEach((e) => {
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;
                switch (e.type) {
                    case 'amount':
                        setFormData({ ...formData, amount: e.value });
                        break;
                    case 'category':
                        if (incomeCategories.map((c) => c.type).includes(category))
                            setFormData({ ...formData, type: "Income", category: category });
                        else if (expenseCategories.map((c) => c.type).includes(category))
                            setFormData({ ...formData, type: "Expense", category: category });
                        break;
                    case 'date':
                        setFormData({ ...formData, date: e.value });
                        break;
                    default:
                        break;
                }
            })
            if (segment.isFinal && formData.amount && formData.category && formData.date && formData.type) {
                createTransaction();
                setFormData(initialState);
            }
        }
    }, [segment]);

    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    return (
        <div>
            <Typography style={{ color: 'gray', fontFamily: 'monospace', marginBottom: '30px', maxWidth: '550px' }} align="center" variant="subtitle2" gutterBottom>
                {
                    segment && segment.words.map((w) => w.value).join(" ")
                }
            </Typography>

            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                    {
                        selectedCategories?.map((c) => (
                            <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <TextField type="number" label="Amount" fullWidth value={formData.amount}
                onChange={e => setFormData({ ...formData, amount: e.target.value })} />

            <TextField type="date" label="Date" fullWidth value={formData.date}
                onChange={e => setFormData({ ...formData, date: formatDate(e.target.value) })} />

            <Button className="button" variant="outlined" color="primary" fullWidth
                onClick={createTransaction}
            >Create</Button>



            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open.isOpen}
                onClose={() => setOpen({ isOpen: false, msg: "" })}
                autoHideDuration={3000}>
                <Alert severity="error">
                    {open.msg}
                </Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={transactionSuccess}
                onClose={() => setTransactionSuccess(false)}
                autoHideDuration={3000}>
                <Alert severity="success">
                    Transaction added successfully!<br />
                    Head over to Dashboard to confirm.
                </Alert>
            </Snackbar>

        </div>

    )
}

export default Form
