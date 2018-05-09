import PropTypes from 'prop-types';

function ascendingOrder(by, a, b) {
    return a[by] - b[by];
}

function descendingOrder(by, a, b) {
    return b[by] - a[by];
}

function sort(values, by, comparisonFn) {
    return [...values]
        .sort((a, b) => comparisonFn(by, a, b));
}

const Sort = ({
    render,
    by,
    compare,
    descending,
    values = [],
}) => {
    let comparisonFn = ascendingOrder;

    if (compare) {
        comparisonFn = compare;
    } else if (descending) {
        comparisonFn = descendingOrder;
    }

    return sort(values, by, comparisonFn)
        .map((value, i) => render(value, i));
};

Sort.propTypes = {
    render: PropTypes.func,
    by: PropTypes.string.isRequired,
    compare: PropTypes.func,
    descending: PropTypes.bool,
    values: PropTypes.arrayOf(
        PropTypes.objectOf(PropTypes.any)
    ),
};

export default Sort;
