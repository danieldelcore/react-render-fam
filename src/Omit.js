import PropTypes from 'prop-types';

function evaluatePredicates(predicates, value, index) {
    const conditions = (typeof predicates === 'function')
        ? [predicates]
        : predicates;

    return conditions.reduce((accum, predicate) => (
        accum ? predicate(value, index) : false
    ), true);
}

const Omit = ({
    predicates = () => true,
    render = () => {},
    values = [],
}) => values.map((value, i) => (
    evaluatePredicates(predicates, value, i)
        ? render(value, i)
        : null
));

Omit.propTypes = {
    predicates: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func),
    ]),
    render: PropTypes.func,
    values: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.any)
    ),
};

export default Omit;
