import React, { useContext } from 'react'
import "./List.css"
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, Slide, IconButton } from "@material-ui/core"
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseTrackerContext } from '../Context/context';


function List() {
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);


    return (
        <MUIList dense={false} className="list">
            {transactions?.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? "avatar__income" : "avatar__expenses"}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount}  Date: ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
