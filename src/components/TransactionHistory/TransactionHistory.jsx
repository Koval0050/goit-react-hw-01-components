import TransactionItem from 'components/TransactionItem/TransactionItem';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead >
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        <TransactionItem transactions={transactions} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;
