import React from 'react'

const isIncome = Math.round(Math.random());

function InfoCard() {
    return (
        <div style={{ textAlign: 'center', padding: '20px', marginBottom: '20px', fontWeight: '500' }}>
            Try Saying: <br />
            <div style={{ textDecoration: 'underline' }}>
                Add {isIncome ? 'Income ' : 'Expense '}
                for {isIncome ? '$100 ' : '$50 '}
                in Category {isIncome ? 'Business ' : 'Bills '}
                for {isIncome ? 'Monday' : 'Tuesday'} ......
            </div>

        </div>
    )
}

export default InfoCard
