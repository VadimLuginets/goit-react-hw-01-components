import { Section, Title, StatList, Item, Info } from './Statistics.styled';
import PropTypes from 'prop-types';
export default function Statistics({ title = `Upload stats`, stats }) {
  return (
    <Section>
      <Title>{title}</Title>
      <StatList>
        {stats.map(data => (
          <StatElement
            key={data.id}
            label={data.label}
            percentage={data.percentage}
          />
        ))}
      </StatList>
    </Section>
  );
}
function StatElement({ id, label, percentage }) {
  return (
    <Item key={id}>
      <Info>{label}</Info>
      <Info>{`${percentage}%`}</Info>
    </Item>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
