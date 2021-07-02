import React, { useContext } from 'react'
import "./List.css"
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, Slide, IconButton } from "@material-ui/core"
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseTrackerContext } from '../Context/context';
import { db } from '../firebase';


function List() {
    const { transactions } = useContext(ExpenseTrackerContext);

    const deleteTransaction = async (id) => {
        await db.collection('Transactions').doc(id).delete();
    }

    if (transactions.length) {
        return (
            <MUIList dense={false} className="list">
                {transactions?.map((t) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={t.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={t.data.type === "Income" ? "avatar__income" : "avatar__expenses"}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={t.data.category} secondary={`$${t.data.amount}  Date: ${t.data.date}`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(t.id)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))}
            </MUIList>
        )
    } else {
        return (
            <div className='list__noTransaction'>You don't have any transaction</div>
        )
    }
}

export default List
