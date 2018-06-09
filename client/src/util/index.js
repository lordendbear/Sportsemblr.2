export const checkIfEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};