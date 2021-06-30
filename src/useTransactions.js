import { useContext } from 'react';
import { ExpenseTrackerContext } from './Context/context';

import { incomeCategories, expenseCategories, resetCategories } from './constants';

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);
    const selectedTransactions = transactions.filter((t) => t.type === title);
    const total = selectedTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);

    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    selectedTransactions.forEach((t) => {
        // find category it belongs to
        const category = categories.find((c) => c.type === t.category);
        //increase this categories' amount 
        if (category) category.amount += t.amount;
    });

    //categories for which transaction exists
    const filteredCategories = categories.filter((c) => c.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    }

    return { total, chartData };
}

export default useTransactions;