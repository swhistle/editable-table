const initialState = {
    elementList: null,
    editableElementId: null
};

const Actions = {
    LoadElementList: 'LOAD_ELEMENT_LIST'
}

const ActionCreators = {
    [Actions.LoadElementList]: (elementList) => {
        return {
            type: Actions.LoadElementList,
            payload: {
                elementList
            }
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LoadElementList:
            return {
                ...state,
                elementList: action.payload.elementList
            };

        default:
            return state;
    }
}

export {Actions, ActionCreators, reducer};
