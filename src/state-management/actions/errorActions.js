export const throwError = (payload) => {
    return {
        type: "THROW_ERROR",
        payload
    }
};

export const clearErrors = () => {
    return {
        type: "CLEAR_ERRORS",
    }
};

export const success = (payload) => {
    return {
        type: "SUCCESS",
        payload
    }
};