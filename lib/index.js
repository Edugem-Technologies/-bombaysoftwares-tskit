"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strToDate = exports.millisToMinutesAndSeconds = exports.formatDuration = exports.formatTimestampToDateMonthYearString = exports.formatTimestampToDateString = exports.formatTimestamp = exports.dateFormatHHMM = exports.dateFormat = exports.dateAndTimeFormat = exports.getDayFromDate = exports.getUnixConvertedIsoString = exports.getUnixConvertedDateTime = exports.getLocalDateHHMM = exports.getLocalDate = exports.getDateTimeFromTimestamp = exports.getCurrentDate = exports.getCurrentTimestamp = exports.getCurrentDateTime = exports.tweleveHourFormat = exports.camelCaseKeys = exports.getTextFromHtml = exports.handleCopyToClipboard = exports.getRandomColor = exports.isValidJsonData = exports.getTwodigitFormat = exports.evalBooleanValue = exports.isSetObject = exports.isSet = void 0;
const constants_1 = require("./constants");
/**
 * Checks if the value provided is none of this - null, undefined, empty string, "undefined", empty array as string
 * @param {any} obj - The value to be checked.
 * @example
 * isSet("null"); returns false
 * @example
 * isSet("some value"); returns true
 * @return {Boolean} - true if the value is set, false otherwise.
 */
const isSet = (obj) => {
    // check if the value is provided is any of the conditions.
    if (obj &&
        obj !== "null" &&
        obj !== undefined &&
        obj !== "" &&
        obj !== "[]" &&
        obj !== "undefined" &&
        typeof obj !== "undefined") {
        return true;
    }
    return false;
};
exports.isSet = isSet;
/**
 * Checks if an object is set and not empty.
 * @param {object} obj - The object to be checked.
 * @example
 * isSetObject({ key1: "value1", key2: "value2" }); returns true
 * @example
 * isSetObject({}); returns false
 * @returns {boolean} - true if the object is set and not empty, false otherwise.
 */
const isSetObject = (obj) => {
    if ((0, exports.isSet)(obj)) {
        // Check if the object is set using the isSet function
        return Object.keys(obj).length > 0 ? true : false; // Return true if the object has at least one key, indicating it is not empty
    }
    else {
        // Return false if the object is not set
        return false;
    }
};
exports.isSetObject = isSetObject;
/**
 * This method checks if the value provided is "true" or true -
 * @param { string | boolean | undefined } value - The value to be checked.
 * @example
 * evalBooleanValue(true); returns true
 * evalBooleanValue("true"); returns true
 * @example
 * isSet(false); returns false
 * isSet("false"); returns false
 * @return {Boolean} - true if the value is "true" or true, false otherwise.
 */
const evalBooleanValue = (value) => {
    return value === "true" || value === true ? true : false;
};
exports.evalBooleanValue = evalBooleanValue;
/**
 * Converts a number to a two-digit format by adding a leading zero if necessary.
 * @param {number} data - The number to be formatted.
 * @example
 * getTwodigitFormat(8); returns 08
 * getTwodigitFormat(9); returns 09
 * @example
 * getTwodigitFormat(10); returns 10
 * @returns {string | number} - The formatted number as a string if less than 10, otherwise the original number.
 */
const getTwodigitFormat = (data) => {
    // Check if the data is greater than 9
    // If true, return the data as it is
    // If false, add a leading zero to the data and return it as a string
    if (data > 99) {
        // Handle the case when the data is three digits
        return null;
    }
    return data > 9 ? data : "0" + data;
};
exports.getTwodigitFormat = getTwodigitFormat;
/**
 * Checks if a string is a valid JSON data by attempting to parse it.
 * @param {string} data - The string to be checked.
 * @example
 * isValidJsonData('{"test":"test"}'); returns { test: 'test' }
 * @example
 * isValidJsonData("abc"); returns false
 * @returns {object | boolean} - The parsed JSON data if it is valid, false otherwise.
 */
const isValidJsonData = (data) => {
    let json_data;
    try {
        json_data = JSON.parse(data); // Attempt to parse the input string as JSON
    }
    catch (e) {
        return false; // Return false if an error occurs during parsing
    }
    return json_data; // Return the parsed JSON data if it is valid
};
exports.isValidJsonData = isValidJsonData;
/**
 * Generates a random color in hexadecimal format.
 * @example
 * getRandomColor(); returns #62C5B9
 * @returns {string} - The randomly generated color.
 */
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    // Generate a random color by iterating 6 times
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Generate a random index to select a letter from the letters string and append the randomly selected letter to the color
    }
    return color;
};
exports.getRandomColor = getRandomColor;
// This function can only be used on the client side
/**
 * Copies the provided text to the clipboard.
 * @param {string} text - The text to be copied.
 * @example
 * handleCopyToClipboard("some text"); // text will be copied to clipboard
 * @returns {Promise<{ success: boolean, message?: string }>} - A promise that resolves to an object indicating the success status of the copy operation, and an optional error message.
 */
const handleCopyToClipboard = async (text) => {
    if ((navigator === null || navigator === void 0 ? void 0 : navigator.clipboard) && (window === null || window === void 0 ? void 0 : window.isSecureContext)) {
        await navigator.clipboard.writeText(text); // Copy the text to the clipboard using the Clipboard API
        return { success: true }; // Return success status
    }
    else {
        if (!(window === null || window === void 0 ? void 0 : window.isSecureContext)) {
            return { success: false, message: "Please host in the secure environment." }; // Return error message indicating the need for a secure environment
        }
        return { success: false, message: "Something went wrong" }; // Return generic error message
    }
};
exports.handleCopyToClipboard = handleCopyToClipboard;
/**
 * Extracts text from an HTML string by removing HTML tags.
 * @param {string} htmlString - The HTML string from which to extract the text.
 * @example
 * getTextFromHtml("<h1>Title</h1><p>This is a paragraph.</p>"); returns TitleThis is a paragraph.
 * @returns {string} - The extracted text without HTML tags.
 */
const getTextFromHtml = (htmlString) => {
    if ((0, exports.isSet)(htmlString)) {
        return htmlString.replace(/(<([^>]+)>)/gi, ""); // Use regular expression to remove HTML tags from the input HTML string
    }
    else {
        return ""; // Return an empty string if the input HTML string is not set
    }
};
exports.getTextFromHtml = getTextFromHtml;
/**
 * Converts the keys of an object from snake_case to camelCase.
 * @param {{ [x: string]: string | number}} obj - The object whose keys should be camelCased.
 * @example
 * const snakeCaseData = { first_name: "John", last_name: "Doe"};
 * const camelCaseData = camelCaseKeys(snakeCaseData);
 * returns camelCaseData as { firstName: "John", lastName: "Doe"}
 * @returns {{ [x: string]: string | number}} - A new object with camelCased keys.
 */
const camelCaseKeys = (obj) => {
    const camelCasedObj = {}; // Create an empty object to store the result with camelCased keys.
    for (const key in obj) {
        // Iterate through each property (key-value pair) in the input object.
        if (obj.hasOwnProperty(key)) {
            // Check if the property is a direct own property of the object (not inherited).
            const camelCasedKey = key.replace(/_([a-z])/g, (_, match) => match.toUpperCase()); // Convert the snake_case key to camelCase using regular expression.
            camelCasedObj[camelCasedKey] = obj[key]; // Add the property to the new object with the camelCased key.
        }
    }
    return camelCasedObj; // Return the new object with camelCased keys.
};
exports.camelCaseKeys = camelCaseKeys;
/**
 * Converts hours to twelve hour format.
 * @param {number} hours - The hours to be formatted.
 * @example
 * tweleveHourFormat(13); returns 01
 * tweleveHourFormat(9); returns 09
 * @returns {string} - The formatted hour as a string.
 */
const tweleveHourFormat = (hours) => {
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours.toString().padStart(2, "0");
};
exports.tweleveHourFormat = tweleveHourFormat;
/**
 * This method returns current date time in YYYY-MM-DD HH:MM:SS format
 * @example
 * getCurrentDateTime(); returns 2023-06-20 12:22:20
 * @return {string} - returns current date time in YYYY-MM-DD HH:MM:SS format
 */
const getCurrentDateTime = () => {
    const date_ob = new Date();
    const date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    const month = "0" + (date_ob.getMonth() + 1); // adjust 0 before single digit month
    const year = date_ob.getFullYear(); // current year
    const hours = (0, exports.getTwodigitFormat)(date_ob.getHours()); // current hours
    const minutes = (0, exports.getTwodigitFormat)(date_ob.getMinutes()); // current minutes
    const seconds = (0, exports.getTwodigitFormat)(date_ob.getSeconds()); // current seconds
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds; // prints date & time in YYYY-MM-DD HH:MM:SS format
};
exports.getCurrentDateTime = getCurrentDateTime;
/**
 * Retrieves the current timestamp in seconds.
 * If a date is provided, it returns the timestamp of that date.
 * If no date is provided, it returns the timestamp of the current date and time.
 * @param {Date | null} date - The optional date for which to retrieve the timestamp.
 * @example
 * date = new Date("2023-09-20T07:00:13.839Z");
 * getCurrentTimestamp(date); returns 1695193213
 * @example
 * getCurrentTimestamp(); returns 1687244441
 * @returns {number} - The current timestamp in seconds.
 */
const getCurrentTimestamp = (date = null) => {
    if ((0, exports.isSet)(date) && date instanceof Date) {
        return Math.floor(date.getTime() / 1000); // Divides the obtained time value by 1000 to convert it from milliseconds to seconds
    }
    else {
        return Math.floor(Date.now() / 1000);
    }
};
exports.getCurrentTimestamp = getCurrentTimestamp;
/**
 * This method returns current date in YYYY-MM-DD format
 * @example
 * getCurrentDate(); returns 2023-06-20
 * @return {string} - returns current date in YYYY-MM-DD format
 */
const getCurrentDate = () => {
    const date_ob = new Date();
    const date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2); // current month
    const year = date_ob.getFullYear(); // current year
    return year + "-" + month + "-" + date; // prints date & time in YYYY-MM-DD format
};
exports.getCurrentDate = getCurrentDate;
/**
 * Formats a timestamp into a string representation of date and time.
 * @param {number} timestamp - The timestamp to be formatted.
 * @param {boolean} [showSeconds=true] - Optional parameter to indicate whether to include seconds in the formatted string. Defaults to true.
 * @example
 * getDateTimeFromTimestamp(1675663705); returns 06-Feb-2023 11:38:25
 * @example
 * getDateTimeFromTimestamp(1675663705, false); returns 06-Feb-2023 11:38
 * @returns {string } - The formatted string representation of date and time.
 */
const getDateTimeFromTimestamp = (timestamp, showSeconds = true) => {
    const dateObject = new Date(timestamp * 1000); // Convert the timestamp to a Date object
    return (0, exports.dateAndTimeFormat)(dateObject, showSeconds); // Format the Date object using dateAndTimeFormat function
};
exports.getDateTimeFromTimestamp = getDateTimeFromTimestamp;
/**
 * Retrieves the local date in a specific format from the provided date and time string.
 * @param {string} dateAndTime - The date and time string.
 * @example
 * getLocalDate("2023-06-20T13:05:00"); returns 20-Jun-2023
 * @returns {string} - The formatted local date string, or null if the dateAndTime parameter is not set.
 */
const getLocalDate = (dateAndTime) => {
    if ((0, exports.isSet)(dateAndTime)) {
        const dateObject = new Date(dateAndTime); // Create a Date object from the provided date and time string
        if (isNaN(dateObject.getTime())) {
            return null; // Return null if the parsed date object is invalid
        }
        return (0, exports.dateFormat)(dateObject); // Format the Date object using dateFormat function
    }
    else {
        return null;
    }
};
exports.getLocalDate = getLocalDate;
/**
 * Retrieves the local date and time in a specific format from the provided date and time string.
 * @param {string} dateAndTime - The date and time string.
 * @example
 * getLocalDateHHMM("2023-06-20T13:05:00"); returns 20-Jun-2023, 13:05
 * @returns {string | null} - The formatted local date and time string, or null if the dateAndTime parameter is not set.
 */
const getLocalDateHHMM = (dateAndTime) => {
    if ((0, exports.isSet)(dateAndTime)) {
        const dateObject = new Date(dateAndTime); // Create a Date object from the provided date and time string
        if (isNaN(dateObject.getTime())) {
            return null; // Return null if the parsed date object is invalid
        }
        return (0, exports.dateFormatHHMM)(dateObject); // Format the Date object using dateFormatHHMM function
    }
    else {
        return null;
    }
};
exports.getLocalDateHHMM = getLocalDateHHMM;
/**
 * Converts a timestamp or Date object to a formatted string representing the date and time IN YYYY-MM-DD hh:mm:ss AM/PM.
 * @param {Object} options - An optional object containing the timestamp and dateObj properties.
 * @param {number | null} options.timestamp - The timestamp value representing the time in seconds since the Unix epoch. (Optional)
 * @param {Date | null} options.timestamp - The timestamp value representing the time in seconds since the Unix epoch. (Optional)
 * @example
 * getUnixConvertedDateTime(); returns 2023-06-20 04:00:15 PM
 * @example
 * const timestamp = 1624212000;
 * const dateObj = new Date("2023-06-20T13:05:00");
 * getUnixConvertedDateTime({ timestamp, dateObj }); returns 2023-06-20 01:05:00 PM;
 * @returns {string} - A formatted string representing the date and time.
 */
const getUnixConvertedDateTime = ({ timestamp = null, dateObj = null, } = {}) => {
    let date_ob;
    if (dateObj instanceof Date) {
        date_ob = dateObj;
    }
    else if (timestamp) {
        date_ob = new Date(timestamp * 1000); // Multiplied the obtained time value by 1000 to convert it from seconds to milliseconds
    }
    else {
        date_ob = new Date();
    }
    const date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2); // adjust 0 before single digit month
    const year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    // converting the hours to 12 hour format
    const ampm = hours >= 12 ? "PM" : "AM";
    let newHour = (0, exports.tweleveHourFormat)(hours);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = date_ob.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return (year + "-" + month + "-" + date + " " + newHour + ":" + minutes + ":" + seconds + " " + ampm);
};
exports.getUnixConvertedDateTime = getUnixConvertedDateTime;
/**
 * Converts a timestamp to an ISO string representation.
 * @param {number | string} timestamp - The timestamp value to be converted.
 * @example
 * getUnixConvertedIsoString(1695193213); returns 2023-09-20T07:00:13.000Z
 * @returns {string} - The ISO string representation of the timestamp.
 */
const getUnixConvertedIsoString = (timestamp) => {
    const _timeStamp = typeof timestamp === "number" ? timestamp : parseInt(timestamp); // Convert the timestamp to a number if it is a string
    return new Date(_timeStamp * 1000).toISOString(); // Create a new Date object using the adjusted timestamp and convert it to an ISO string
};
exports.getUnixConvertedIsoString = getUnixConvertedIsoString;
/**
 * Retrieves the day of the week from a given date string.
 * @param {string} dateString - The input date string.
 * @example
 * const dateStringFormatOne = "07/Jul/2023"
 * const dateStringFormatFour = "07-07-2023"
 * getDayFromDate(dateStringFormatOne); return Friday
 * getDayFromDate(dateStringFormatFour); return Friday
 * @returns {string} - The day of the week as a string, or "Invalid date format" if the input is not a valid date.
 */
const getDayFromDate = (dateString) => {
    const dateFormats = ["DD-MMM-YYYY", "DD/MM/YYYY", "DD/MMM/YYYY"];
    let date = null;
    for (let format of dateFormats) {
        date = (0, exports.strToDate)(dateString, format);
        if (date)
            break;
    }
    if (!date) {
        return "Invalid date format";
    }
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayOfWeek = date.getDay();
    return days[dayOfWeek];
};
exports.getDayFromDate = getDayFromDate;
/**
 * Formats a Date object into a string representation of date and time.
 * @param {Date} dateObject - The Date object to be formatted.
 * @param {boolean} [showSeconds=true] - Optional. Determines whether to include seconds in the formatted string. Default is true.
 * @example
 * const date = new Date();
 * dateAndTimeFormat(date); returns 20-Jun-2023 12:49:25
 * @example
 * dateAndTimeFormat(date, false); returns 20-Jun-2023 22:18
 * @returns {string | null} - The formatted string representation of date and time.
 */
const dateAndTimeFormat = (dateObject, showSeconds = true) => {
    if ((0, exports.isSet)(dateObject)) {
        const date = (0, exports.getTwodigitFormat)(dateObject.getDate()); // Get the two-digit formatted day
        const hour = (0, exports.getTwodigitFormat)(dateObject.getHours()); // Get the two-digit formatted hour
        const minutes = (0, exports.getTwodigitFormat)(dateObject.getMinutes()); // Get the two-digit formatted minute
        const seconds = (0, exports.getTwodigitFormat)(dateObject.getSeconds()); // Get the two-digit formatted second
        if (showSeconds) {
            // Format the string with date, month, year, hour, minute, and second
            return (date +
                "-" +
                constants_1.MONTH[dateObject.getMonth()] +
                "-" +
                dateObject.getFullYear() +
                " " +
                hour +
                ":" +
                minutes +
                ":" +
                seconds);
        }
        else {
            // Format the string with date, month, year, hour, and minute (without seconds)
            return (date +
                "-" +
                constants_1.MONTH[dateObject.getMonth()] +
                "-" +
                dateObject.getFullYear() +
                " " +
                hour +
                ":" +
                minutes);
        }
    }
    else {
        return null; // Return null if dateObject is not set
    }
};
exports.dateAndTimeFormat = dateAndTimeFormat;
/**
 * Formats a Date object into a string representation of date in DD-Mmm-YYYY format.
 * @param {Date} dateObject - The Date object to be formatted.
 * @example
 * const date = new Date();
 * dateFormat(date); returns 20-Jun-2023
 * @returns {string | null} - The formatted string representation of date in DD-Mmm-YYYY format.
 */
const dateFormat = (dateObject) => {
    if ((0, exports.isSet)(dateObject)) {
        const date = (0, exports.getTwodigitFormat)(dateObject.getDate()); // Get the two-digit formatted day
        return date + "-" + constants_1.MONTH[dateObject.getMonth()] + "-" + dateObject.getFullYear(); // Format the string with date, month, and year
    }
    else {
        return null; // Return null if dateObject is not set
    }
};
exports.dateFormat = dateFormat;
/**
 * Formats a Date object into a string representation of date and time in DD-Mmm-YYYY, HH:mm format.
 * @param {Date} dateObject - The Date object to be formatted.
 * @example
 * const data = new Date();
 * dateFormatHHMM(date); returns 20-Jun-2023, 13:05
 * @returns {string | null} - The formatted string representation of date and time in DD-Mmm-YYYY, HH:mm format.
 */
const dateFormatHHMM = (dateObject) => {
    if ((0, exports.isSet)(dateObject)) {
        const date = (0, exports.getTwodigitFormat)(dateObject.getDate()); // Get the two-digit formatted day
        const hour = (0, exports.getTwodigitFormat)(dateObject.getHours()); // Get the two-digit formatted hour
        const minutes = (0, exports.getTwodigitFormat)(dateObject.getMinutes()); // Get the two-digit formatted minutes
        // Format the string with date, month, year, hour, and minutes
        return (date +
            "-" +
            constants_1.MONTH[dateObject.getMonth()] +
            "-" +
            dateObject.getFullYear() +
            ", " +
            hour +
            ":" +
            minutes);
    }
    else {
        return null; // Return null if dateObject is not set
    }
};
exports.dateFormatHHMM = dateFormatHHMM;
/**
 * Converts a Unix timestamp to a string representing the date and time in the format: DD-MM-YYYY HH:mm.
 * @param {number} timestamp - The Unix timestamp to be formatted.
 * @example
 * formatTimestamp(1692700267); returns 22-08-2023 10:31
 * @returns {string} - The formated string representation of date and time.
 */
const formatTimestamp = (timestamp) => {
    // Create Date objects for the specified timestamp
    let Time = new Date(timestamp * 1000);
    // Extract date components
    let date = (0, exports.getTwodigitFormat)(Time.getUTCDate());
    let month = (0, exports.getTwodigitFormat)(Time.getUTCMonth() + 1);
    let year = Time.getFullYear();
    // Extract time components
    let hours = (0, exports.getTwodigitFormat)(Time.getUTCHours());
    let minutes = (0, exports.getTwodigitFormat)(Time.getUTCMinutes());
    // Return the formatted string representation of date and time
    return date + "-" + month + "-" + year + " " + hours + ":" + minutes + " ";
};
exports.formatTimestamp = formatTimestamp;
/**
 * Formats a timestamp into a string representation of date in the format: DD/MM/YYYY.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * formatTimestampToDateString(1687244413); returns 20/6/2023
 * @returns {string} - The formatted string representation of date.
 */
const formatTimestampToDateString = (timestamp) => {
    let currentTime = new Date();
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330; // IST offset UTC +5:30
    let ISTTime = new Date(timestamp * 1000 + (ISTOffset + currentOffset) * 60000); // Calculate the date and time in IST (Indian Standard Time)
    let dateIST = (0, exports.getTwodigitFormat)(ISTTime.getDate());
    let monthIST = (0, exports.getTwodigitFormat)(ISTTime.getMonth() + 1);
    let yearIST = ISTTime.getFullYear();
    return dateIST + "/" + monthIST + "/" + yearIST + " "; // Return the formatted string representation of date
};
exports.formatTimestampToDateString = formatTimestampToDateString;
/**
 * Formats a UNIX timestamp into a string representation of date, month and year in DD Mmm, YYYY format.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * formatTimestampToDateMonthYearString(1687244413); returns 20 Jun, 2023
 * @returns {string} - The formatted string representation of date, month and year.
 */
const formatTimestampToDateMonthYearString = (timestamp) => {
    let currentTime = new Date();
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330; // IST offset UTC +5:30
    let ISTTime = new Date(timestamp * 1000 + (ISTOffset + currentOffset) * 60000); // Calculate the date and time in IST (Indian Standard Time)
    let dateIST = ISTTime.getDate();
    let monthStr = constants_1.MONTH[ISTTime.getMonth()];
    let yearIST = ISTTime.getFullYear();
    return dateIST + " " + monthStr + ", " + yearIST + " "; // Return the formatted string representation of date and month
};
exports.formatTimestampToDateMonthYearString = formatTimestampToDateMonthYearString;
/**
 * Formats a duration given in seconds into a human-readable string.
 *
 * @param {number | null} totalSeconds - The total duration in seconds. If null, an empty string is returned.
 * @returns {string} - A formatted duration string in the format "Xhr Ymin Zsec",
 *                     where X is hours, Y is minutes, and Z is seconds. If the duration
 *                     is less than an hour, the hour part is omitted; similarly for minutes
 *                     and seconds. If `totalSeconds` is null, returns an empty string.
 *
 * @example
 * formatDuration(3661); // returns "1hr 1min 1sec"
 * formatDuration(45);   // returns "45sec"
 * formatDuration(null); // returns ""
 */
const formatDuration = (totalSeconds) => {
    // If totalSeconds is null, handle it by returning an empty string or a default value
    if (totalSeconds === null) {
        return "";
    }
    // Calculate the number of hours by dividing the total seconds by 3600 (the number of seconds in an hour)
    const hours = Math.floor(totalSeconds / 3600);
    // Calculate the number of minutes by first getting the remainder of the seconds divided by 3600
    // (to get the leftover seconds after extracting hours), and then dividing by 60 (the number of seconds in a minute)
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    // Calculate the remaining seconds after extracting hours and minutes
    const seconds = totalSeconds % 60;
    // Initialize an empty string to build the formatted time
    let formattedTime = "";
    // Append the hours to the formatted string if there are any hours
    if (hours > 0) {
        formattedTime += `${hours}hr `;
    }
    // Append the minutes to the formatted string if there are any minutes
    if (minutes > 0) {
        formattedTime += `${minutes}min `;
    }
    // Append the seconds to the formatted string if there are any seconds
    if (seconds > 0) {
        formattedTime += `${seconds}sec`;
    }
    // Return the formatted time string, trimmed to remove any trailing spaces
    return formattedTime.trim();
};
exports.formatDuration = formatDuration;
/**
 * Converts milliseconds to a string representation of minutes, seconds, and milliseconds.
 * @param {number} millis - The number of milliseconds to be converted.
 * @example
 * millisToMinutesAndSeconds(1010); returns 0:01.010
 * @returns {string} - The formatted string representation of minutes, seconds, and milliseconds.
 */
const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000); // Calculate the number of minutes
    let seconds = ((millis % 60000) / 1000).toFixed(0); // Calculate the number of seconds
    let milliseconds = Math.floor(millis % 1000)
        .toString()
        .padStart(3, "0"); // Calculate the number of milliseconds
    return `${minutes}:${parseInt(seconds) < 10 ? "0" : ""}${seconds}.${milliseconds}`; //If seconds is less than 10 put a zero in front.
};
exports.millisToMinutesAndSeconds = millisToMinutesAndSeconds;
/**
 * Parses the input date string based on the specified format and returns a Date object.
 * @param {string} dateString - The input date string.
 * @param {string} format - The format string specifying the expected date format.
 * @example
 * const dateStringFormatOne = "07/Jul/2023"
 * const format = "DD/MMM/YYYY";
 * strToDate(dateString, format); returns 2023-07-07T00:00:00.000Z
 * @returns {Date} - The parsed Date object, or null if the input is not a valid date.
 */
const strToDate = (dateString, format) => {
    const parts = dateString.split(/[\/-]/);
    const formatParts = format.split(/[-/]/);
    const dateObj = {};
    for (let i = 0; i < formatParts.length; i++) {
        const formatPart = formatParts[i].toUpperCase();
        const part = parts[i];
        if (formatPart === "DD") {
            dateObj.day = parseInt(part, 10); // Extract the day value and assign it to the date object
        }
        else if (formatPart === "MM") {
            dateObj.month = parseInt(part, 10) - 1; // Extract the month value and assign it to the date object
        }
        else if (formatPart === "MMM") {
            const monthMap = {
                JAN: 0,
                FEB: 1,
                MAR: 2,
                APR: 3,
                MAY: 4,
                JUN: 5,
                JUL: 6,
                AUG: 7,
                SEP: 8,
                OCT: 9,
                NOV: 10,
                DEC: 11,
            };
            dateObj.month = monthMap[part.toUpperCase()]; // Map the three-letter month abbreviation to a numeric value and assign it to the date object
        }
        else if (formatPart === "YYYY") {
            dateObj.year = parseInt(part, 10); // Extract the year value and assign it to the date object
        }
    }
    const { day, month, year } = dateObj;
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return null; // Return null if any of the date components are not valid numbers
    }
    return new Date(year, month, day); // Construct a new Date object with the parsed year, month, and day
};
exports.strToDate = strToDate;
