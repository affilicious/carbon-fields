import immutable from 'object-path-immutable';
import { omit } from 'lodash';
import { decorateFieldReducer } from 'lib/registry';
import { ADD_FIELDS, REMOVE_FIELDS, UPDATE_FIELD, SET_UI } from 'fields/actions';

/**
 * The reducer that handles manipulation to field's state.
 *
 * @param  {Object} [state]
 * @param  {Object} [action]
 * @return {Object}
 */
function reducer(state = {}, { type, payload } = {}) {
	switch (type) {
		case ADD_FIELDS:
			return { ...state, ...payload };
		case REMOVE_FIELDS:
			return omit(state, payload);
		case UPDATE_FIELD:
			return immutable.assign(state, payload.fieldId, payload.values);
		case SET_UI:
			return immutable.assign(state, `${payload.fieldId}.ui`, payload.ui);
		default:
			return state;
	}
}

export default decorateFieldReducer(reducer);
