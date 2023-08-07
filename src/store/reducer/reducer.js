const initialValue = {
    isLoading: false,
    data: [],
    inputValue: "cat"
};

export const picturesReducer = (state = initialValue, action) => {
    if (action.type === "SET_IS_LOADING") {
        return {
            ...state,
            isLoading: action.payload
        };
    }
    if (action.type === "SET_DATA") {
        return {
            ...state,
            data: action.payload
        };
    }
    if (action.type === "SET_INPUT_VALUE") {
        return {
            ...state,
            inputValue: action.payload
        }
    }
    return state;
}