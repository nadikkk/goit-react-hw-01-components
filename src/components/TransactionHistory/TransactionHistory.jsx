import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.transaction}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => {
          return (
            <tr key={el.id} className={css.line}>
              <td className={css.type}>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
		  id: PropTypes.string.isRequired,
		  type: PropTypes.string.isRequired,
		  amount: PropTypes.string.isRequired,
		  currency: PropTypes.string.isRequired,
		})
	)
}
