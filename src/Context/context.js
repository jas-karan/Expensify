import React, { createContext, useEffect, useState, useContext } from "react";
import { db } from '../firebase.js';
import { AuthContext } from "./AuthContext.js";

export const ExpenseTrackerContext = createContext();

export const Provider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        db.collection('Transactions').onSnapshot(snapshot => {
            if (user) {
                const d = snapshot.docs.filter(doc => doc.data().email === user.email);
                setTransactions(d.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
            }
        });
    }, [user]);

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.data.type === 'Income' ? acc + currVal.data.amount : acc - currVal.data.amount);
    }, 0);

    return (
        <ExpenseTrackerContext.Provider value={{ transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}