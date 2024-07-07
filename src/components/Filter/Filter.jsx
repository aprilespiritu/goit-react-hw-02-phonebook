import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, setFilter }) => {
    //filter by name on Search
    const handleFilterChange = e => {
        setFilter(e.target.value);
    };

    return (
        <div className={css.container}>
            <p>Find Contacts by Name</p>
            <input
                className={css.seachField}
                type="text"
                name="filter"
                placeholder="Search by name"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
};


Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};