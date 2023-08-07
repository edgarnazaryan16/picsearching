import { dataAPI, sleepProject } from "../../components/helpers";
export const setData = (payload) => {
    return {
        type: 'SET_DATA',
        payload
    }
}
export const setIsLoading = (payload) => {
    return {
        type: "SET_IS_LOADING",
        payload
    }
}
export const setInputValue = (payload) => {
    return {
        type: "SET_INPUT_VALUE",
        payload
    }
}
export const fetchData = (value) => {
    return async(dispatch) => {
        try {
            await sleepProject(3000);
            dispatch(setIsLoading(true))
            const response = await fetch(`${dataAPI}${value}`);
            const data = await response.json();
            dispatch(setData(data.results));
        } catch {
            console.log("Something goes wrong")
        } finally {
            dispatch(setIsLoading(false))
        }
    }
}