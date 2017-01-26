/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';

/**
 * The internal dependencies.
 */
import AssociationListItem from 'fields/components/association-list-item';

/**
 * Renders a list of item that can be associated.
 *
 * @param  {Object}        props
 * @param  {Object[]}      props.items
 * @param  {Function}      props.onAdd
 * @return {React.Element}
 */
export const AssociationList = ({ items, onAdd }) => {
	return <ul className="carbon-relationship-list">
		{
			items.map((item, index) => <AssociationListItem key={index} item={item} onAdd={onAdd} />)
		}
	</ul>;
};

export default AssociationList;
