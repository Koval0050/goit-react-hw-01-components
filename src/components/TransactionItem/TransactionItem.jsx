import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

const TransactionItem = ({ transactions }) => {
  return transactions.map(e => {
    return (
      <tr key={e.id} className={css.tableBody}>
        <td className={css.tableBodyType}>{e.type}</td>
        <td className={css.tableBodyAmount}>{e.amount}</td>
        <td className={css.tableBodyCurrency}>{e.currency}</td>
      </tr>
    );
  });
};

TransactionItem.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionItem;
