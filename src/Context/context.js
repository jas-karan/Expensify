import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 2000, "category": "Lottery", "type": "Income", "date": "2021-06-29", "id": "33013b25-7ed9-4d50-88ae-e17ef6c314f2" }, { "amount": 120, "category": "Car", "type": "Expense", "date": "2021-06-29", "id": "da853c8a-7733-4092-97f0-79256f32473c" }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action creators

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount);
    }, 0);

    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}