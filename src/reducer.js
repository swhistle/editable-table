const initialState = {
    elementList: null,
    editableElementId: null
};

const Operations = {
    loadElementList: (dispatch) => {
        fetch('https://crudcrud.com/api/1f4422306d744a97a6c7deb4c7934987/unicorns')
            .then((response) => response.json())
            .then((data) => dispatch(ActionCreators[Actions.GetElementList](data)));
    }
};

const Actions = {
    GetElementList: 'LOAD_ELEMENT_LIST'
}

const ActionCreators = {
    [Actions.GetElementList]: (elementList) => {
        return {
            type: Actions.GetElementList,
            payload: {
                elementList
            }
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GetElementList:
            return {
                ...state,
                elementList: action.payload.elementList
            };

        default:
            return state;
    }
}

export {Operations, Actions, ActionCreators, reducer};
