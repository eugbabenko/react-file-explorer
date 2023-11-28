/**
 * Format a given date and time to a specific string format.
 *
 * @param {string} inputDate - The input date string to be formatted.
 * @returns {string} - The formatted date and time string.
 */

const formatDateTime = (inputDate) => {
    const date = new Date(inputDate);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
};

export default formatDateTime;
