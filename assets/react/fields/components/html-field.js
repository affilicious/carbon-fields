import React from 'react';
import { compose } from 'recompose';

import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render custom HTML markup.
 *
 * @param  {Object} props
 * @param  {Object} props.field
 * @return {React.Element}
 */
export const HtmlField = ({ field }) => {
	return <Field field={field}>
		<div dangerouslySetInnerHTML={{ __html: field.html }}></div>
	</Field>;
};

export default compose(
	withStore(),
	withSetup()
)(HtmlField);

