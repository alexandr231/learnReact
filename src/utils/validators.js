export const reqiured = (value) => {
    if (value) return undefined;
    return "Field is required"
}

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value && value.length > maxLength) return `max length is ${maxLength}`;
        return undefined;
    }
}