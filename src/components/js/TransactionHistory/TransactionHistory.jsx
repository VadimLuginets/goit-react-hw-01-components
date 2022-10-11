import PropTypes from 'prop-types';
import {
  Table,
  TableHeader,
  TableHeaderEl,
  Row,
  RowEl,
  TableBody,
} from './TransactionHistory.styled';
export default function TransactionHistory({ data }) {
  return (
    <Table>
      <TableHeader>
        <Row>
          <TableHeaderEl>Type</TableHeaderEl>
          <TableHeaderEl>Amount</TableHeaderEl>
          <TableHeaderEl>Currency</TableHeaderEl>
        </Row>
      </TableHeader>
      {data.map(obj => (
        <FillingTableElements data={obj} />
      ))}
      <TableBody></TableBody>
    </Table>
  );
}
function FillingTableElements({ data }) {
  return (
    <Row key={data.id}>
      <RowEl>{data.type}</RowEl>
      <RowEl>{data.amount}</RowEl>
      <RowEl>{data.currency}</RowEl>
    </Row>
  );
}
TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
