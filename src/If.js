import PropTypes from 'prop-types';

const If = ({
    predicate = false,
    children,
}) => (predicate ? children : '');

If.propTypes = {
    predicate: PropTypes.bool,
    children: PropTypes.node,
};

export default If;
