import {url, resource} from '../api';
import {Actions, ActionCreators} from './actions';

export const Operations = {
    loadElementList: (dispatch) => {
        fetch(`${url}/${resource}`)
            .then((response) => response.json())
            .then((data) => dispatch(ActionCreators[Actions.GetElementList](data)));
    },
    updateElement: (dispatch, elementId, updateElement) => {
        const elementForUpdating = {...updateElement};
        delete elementForUpdating['_id'];
        delete elementForUpdating['id'];
        dispatch(ActionCreators[Actions.EditElement](elementId, elementForUpdating));
        fetch(`${url}/${resource}/${elementId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elementForUpdating)
        })
            .then((response) => {})
    }
};
