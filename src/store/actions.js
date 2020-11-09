const Actions = {
    GetElementList: 'LOAD_ELEMENT_LIST',
    SelectElementEditable: 'SELECT_ELEMENT_EDITABLE',
    EditElement: 'EDIT_ELEMENT'
}

const ActionCreators = {
    [Actions.GetElementList]: (elementList) => {
        return {
            type: Actions.GetElementList,
            payload: {
                elementList
            }
        }
    },
    [Actions.SelectElementEditable]: (elementId) => {
        return {
            type: Actions.SelectElementEditable,
            payload: {
                elementId
            }
        }
    },
    [Actions.EditElement]: (elementId, element) => {
        return {
            type: Actions.EditElement,
            payload: {
                elementId,
                element
            }
        }
    }
}

export {Actions, ActionCreators};
