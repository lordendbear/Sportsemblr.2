import React from 'react';
import Filter from '../../containers/Filter.js';
import { VisibilityFilters } from '../../actions/eventActions';

const Filters = () => (
  <div>
    <Filter filter={VisibilityFilters.SHOW_ALL}>
        All
    </Filter>
    <Filter filter={VisibilityFilters.SHOW_ACTIVE}>
        Active
    </Filter>
    <Filter filter={VisibilityFilters.SHOW_INACTIVE}>
        Inactive
    </Filter>
  </div>
)

export default Filters;
