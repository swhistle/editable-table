import {Actions} from './actions';

const initialState = {
    elementList: null,
    editableElementId: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GetElementList:
            return {
                ...state,
                elementList: action.payload.elementList
            };

        case Actions.SelectElementEditable:
            return {
                ...state,
                editableElementId: action.payload.elementId
            }

        case Actions.EditElement:
            return {
                ...state,
                editableElementId: null,
                elementList: state.elementList.map((item) => {
                    if (item._id === action.payload.elementId || item.id === action.payload.elementId) {
                        return {
                            ...item,
                            ...action.payload.element
                        };
                    }

                    return item;
                })
            }

        default:
            return state;
    }
}
