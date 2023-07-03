import { MONTH } from "./constants";

/**
* Checks if the value provided is none of this - null, undefined, empty string, "undefined", empty array as string
* @param {any} obj - The value to be checked.
* @example
* isSet("null"); returns false
* @example
* isSet("some value"); returns true
* @return {Boolean} - true if the value is set, false otherwise.
*/
export const isSet = (obj: any): boolean => {
    // check if the value is provided is any of the conditions.
    if (obj && obj !== "null" && obj !== undefined && obj !== "" && obj !== "[]" && obj !== "undefined" && typeof obj !== "undefined") {
        return true;
    }
    return false;
};

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
export const evalBooleanValue = (value: string | boolean | undefined): boolean => {
    return (value === "true" || value === true) ? true : false;
};

/**
* This method returns current date time in YYYY-MM-DD HH:MM:SS format
* @example
* getCurrentDateTime(); returns 2023-06-20 12:22:20
* @return {string} - returns current date time in YYYY-MM-DD HH:MM:SS format
*/
export const getCurrentDateTime = (): string => {
    const date_ob = new Date();
    const date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    const month = ("0" + (date_ob.getMonth() + 1));  // adjust 0 before single digit month
    const year = date_ob.getFullYear(); // current year
    const hours = getTwodigitFormat(date_ob.getHours()); // current hours
    const minutes = getTwodigitFormat(date_ob.getMinutes());  // current minutes 
    const seconds = getTwodigitFormat(date_ob.getSeconds()); // current seconds
    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;  // prints date & time in YYYY-MM-DD HH:MM:SS format
};

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
export const getCurrentTimestamp = (date: Date | null = null): number => {
    if (isSet(date) && date instanceof Date) {
        return Math.floor(date.getTime() / 1000); // Divides the obtained time value by 1000 to convert it from milliseconds to seconds
    } else {
        return Math.floor(Date.now() / 1000);
    }
};

/**
* This method returns current date in YYYY-MM-DD format
* @example
* getCurrentDate(); returns 2023-06-20
* @return {string} - returns current date in YYYY-MM-DD format
*/
export const getCurrentDate = () => {
    const date_ob = new Date();
    const date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2); // current month
    const year = date_ob.getFullYear(); // current year
    return year + "-" + month + "-" + date; // prints date & time in YYYY-MM-DD format
};

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
export const getUnixConvertedDateTime = ({ timestamp = null, dateObj = null }: { timestamp?: number | null, dateObj?: Date | null } = {}): string => {
    let date_ob: Date;
    if (dateObj instanceof Date) {
        date_ob = dateObj;
    } else if (timestamp) {
        date_ob = new Date(timestamp * 1000); // Multiplied the obtained time value by 1000 to convert it from seconds to milliseconds
    } else {
        date_ob = new Date();
    }
    const date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    const month = ("0" + (date_ob.getMonth() + 1)).slice(-2); // adjust 0 before single digit month
    const year = date_ob.getFullYear();
    let hours: number = date_ob.getHours();
    let minutes: string | number = date_ob.getMinutes();
    // converting the hours to 12 hour format
    const ampm = hours >= 12 ? "PM" : "AM";
    let newHour = tweleveHourFormat(hours);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds: string | number = date_ob.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return year + "-" + month + "-" + date + " " + newHour + ":" + minutes + ":" + seconds + " " + ampm;
};

/**
 * Converts hours to twelve hour format.
 * @param {number} hours - The hours to be formatted.
 * @example 
 * tweleveHourFormat(13); returns 01
 * tweleveHourFormat(9); returns 09
 * @returns {string} - The formatted hour as a string.
 */
export const tweleveHourFormat = (hours: number): string => {
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours.toString().padStart(2, "0");
};

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
export const getTwodigitFormat = (data: number): string | number | null=> {
    // Check if the data is greater than 9
    // If true, return the data as it is
    // If false, add a leading zero to the data and return it as a string
    if (data > 99) {
        // Handle the case when the data is three digits
        return null;
    }
    return data > 9 ? data : "0" + data;
};

/**
 * Converts a timestamp to an ISO string representation.
 * @param {number | string} timestamp - The timestamp value to be converted.
 * @example
 * getUnixConvertedIsoString(1695193213); returns 2023-09-20T07:00:13.000Z
 * @returns {string} - The ISO string representation of the timestamp.
 */
export const getUnixConvertedIsoString = (timestamp: number): string => {
    const _timeStamp = typeof timestamp === "number" ? timestamp : parseInt(timestamp); // Convert the timestamp to a number if it is a string
    return new Date(_timeStamp * 1000).toISOString(); // Create a new Date object using the adjusted timestamp and convert it to an ISO string
};

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
export const dateAndTimeFormat = (dateObject: Date, showSeconds = true): string | null => {
    if (isSet(dateObject)) {
        const date = getTwodigitFormat(dateObject.getDate()); // Get the two-digit formatted day
        const hour = getTwodigitFormat(dateObject.getHours()); // Get the two-digit formatted hour
        const minutes = getTwodigitFormat(dateObject.getMinutes()); // Get the two-digit formatted minute
        const seconds = getTwodigitFormat(dateObject.getSeconds()); // Get the two-digit formatted second
        if (showSeconds) {
            // Format the string with date, month, year, hour, minute, and second
            return date + "-" + MONTH[dateObject.getMonth()] + "-" + dateObject.getFullYear() + " " + hour + ":" + minutes + ":" + seconds;
        } else {
            // Format the string with date, month, year, hour, and minute (without seconds)
            return date + "-" + MONTH[dateObject.getMonth()] + "-" + dateObject.getFullYear() + " " + hour + ":" + minutes;
        }
    } else {
        return null; // Return null if dateObject is not set
    }
};

/**
 * Formats a Date object into a string representation of date in DD-Mmm-YYYY format.
 * @param {Date} dateObject - The Date object to be formatted.
 * @example
 * const date = new Date();
 * dateFormat(date); returns 20-Jun-2023
 * @returns {string | null} - The formatted string representation of date in DD-Mmm-YYYY format.
 */
export const dateFormat = (dateObject: Date): string | null => {
    if (isSet(dateObject)) {
        const date = getTwodigitFormat(dateObject.getDate()); // Get the two-digit formatted day
        return date + "-" + MONTH[dateObject.getMonth()] + "-" + dateObject.getFullYear(); // Format the string with date, month, and year
    } else {
        return null; // Return null if dateObject is not set
    }
};

/**
 * Formats a Date object into a string representation of date and time in DD-Mmm-YYYY, HH:mm format.
 * @param {Date} dateObject - The Date object to be formatted.
 * @example
 * const data = new Date();
 * dateFormatHHMM(date); returns 20-Jun-2023, 13:05
 * @returns {string | null} - The formatted string representation of date and time in DD-Mmm-YYYY, HH:mm format.
 */
export const dateFormatHHMM = (dateObject: Date): string | null => {
    if (isSet(dateObject)) {
        const date = getTwodigitFormat(dateObject.getDate()); // Get the two-digit formatted day
        const hour = getTwodigitFormat(dateObject.getHours()); // Get the two-digit formatted hour
        const minutes = getTwodigitFormat(dateObject.getMinutes()); // Get the two-digit formatted minutes
        // Format the string with date, month, year, hour, and minutes
        return date + "-" + MONTH[dateObject.getMonth()] + "-" + dateObject.getFullYear() + ", " + hour + ":" + minutes;
    } else {
        return null; // Return null if dateObject is not set
    }
};

/**
 * Formats a timestamp into a string representation of date and time.
 * @param {number} timestamp - The timestamp to be formatted.
 * @param {boolean} [showSeconds=true] - Optional parameter to indicate whether to include seconds in the formatted string. Defaults to true.
 * @example
 * getDateTime(1675663705); returns 06-Feb-2023 11:38:25
 * @example
 * getDateTime(1675663705, false); returns 06-Feb-2023 11:38
 * @returns {string } - The formatted string representation of date and time.
 */
export const getDateTime = (timestamp: number, showSeconds = true) => {
    const dateObject = new Date(timestamp * 1000); // Convert the timestamp to a Date object
    return dateAndTimeFormat(dateObject, showSeconds); // Format the Date object using dateAndTimeFormat function
};

/**
 * Checks if a string is a valid JSON data by attempting to parse it.
 * @param {string} data - The string to be checked.
 * @example 
 * isValidJsonData('{"test":"test"}'); returns { test: 'test' }
 * @example 
 * isValidJsonData("abc"); returns false
 * @returns {object | boolean} - The parsed JSON data if it is valid, false otherwise.
 */
export const isValidJsonData = (data: string): object | boolean => {
    let json_data;
    try {
        json_data = JSON.parse(data); // Attempt to parse the input string as JSON
    } catch (e) {
        return false; // Return false if an error occurs during parsing
    }
    return json_data; // Return the parsed JSON data if it is valid
};

/**
 * Retrieves the local date in a specific format from the provided date and time string.
 * @param {string} dateAndTime - The date and time string.
 * @example 
 * getLocalDate("2023-06-20T13:05:00"); returns 20-Jun-2023
 * @returns {string} - The formatted local date string, or null if the dateAndTime parameter is not set.
 */
export const getLocalDate = (dateAndTime: string): string | null => {
    if (isSet(dateAndTime)) {
        const dateObject = new Date(dateAndTime); // Create a Date object from the provided date and time string
        if (isNaN(dateObject.getTime())) {
            return null; // Return null if the parsed date object is invalid
        }
        return dateFormat(dateObject); // Format the Date object using dateFormat function
    } else {
        return null;
    }
};

/**
 * Retrieves the local date and time in a specific format from the provided date and time string.
 * @param {string} dateAndTime - The date and time string.
 * @example
 * getLocalDateHHMM("2023-06-20T13:05:00"); returns 20-Jun-2023, 13:05
 * @returns {string | null} - The formatted local date and time string, or null if the dateAndTime parameter is not set.
 */
export const getLocalDateHHMM = (dateAndTime: string): string | null => {
    if (isSet(dateAndTime)) {
        const dateObject = new Date(dateAndTime); // Create a Date object from the provided date and time string
        if (isNaN(dateObject.getTime())) {
            return null; // Return null if the parsed date object is invalid
        }
        return dateFormatHHMM(dateObject); // Format the Date object using dateFormatHHMM function
    } else {
        return null;
    }
};

/**
 * Checks if an object is set and not empty.
 * @param {object} obj - The object to be checked.
 * @example
 * isSetObject({ key1: "value1", key2: "value2" }); returns true
 * @example
 * isSetObject({}); returns false
 * @returns {boolean} - true if the object is set and not empty, false otherwise.
 */
export const isSetObject = (obj: object): boolean => {
    if (isSet(obj)) { // Check if the object is set using the isSet function
        return Object.keys(obj).length > 0 ? true : false; // Return true if the object has at least one key, indicating it is not empty
    } else {
        // Return false if the object is not set
        return false;
    }
};

/**
 * Generates a random color in hexadecimal format.
 * @example
 * getRandomColor(); returns #62C5B9
 * @returns {string} - The randomly generated color.
 */
export const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    // Generate a random color by iterating 6 times
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // Generate a random index to select a letter from the letters string and append the randomly selected letter to the color
    }
    return color;
};

// This function can only be used on the client side
/**
 * Copies the provided text to the clipboard.
 * @param {string} text - The text to be copied.
 * @example
 * handleCopyToClipboard("some text"); // text will be copied to clipboard
 * @returns {Promise<{ success: boolean, message?: string }>} - A promise that resolves to an object indicating the success status of the copy operation, and an optional error message.
 */
export const handleCopyToClipboard = async (text: string) => {
    if (navigator?.clipboard && window?.isSecureContext) {
        await navigator.clipboard.writeText(text); // Copy the text to the clipboard using the Clipboard API
        return { success: true }; // Return success status
    }
    else {
        if (!window?.isSecureContext) {
            return { success: false, message: "Please host in the secure environment." }; // Return error message indicating the need for a secure environment
        }
        return { success: false, message: "Something went wrong" }; // Return generic error message
    }
};

/**
 * Extracts text from an HTML string by removing HTML tags.
 * @param {string} htmlString - The HTML string from which to extract the text.
 * @example
 * getTextFromHtml("<h1>Title</h1><p>This is a paragraph.</p>"); returns TitleThis is a paragraph.
 * @returns {string} - The extracted text without HTML tags.
 */
export const getTextFromHtml = (htmlString: string): string => {
    if (isSet(htmlString)) {
        return htmlString.replace(/(<([^>]+)>)/ig, ''); // Use regular expression to remove HTML tags from the input HTML string
    } else {
        return ""; // Return an empty string if the input HTML string is not set
    }
};

/**
 * Formats a timestamp into a string representation of date and time in the format: DD-MM-YYYY HH:mm.
 * The timestamp is adjusted to the Indian Standard Time (IST) timezone.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * formatTimestamp(1687244413); returns 20-6-2023 12:30
 * @returns {string} - The formated string representation of date and time.
 */
export const formatTimestamp = (timestamp: number): string => {
    let currentTime = new Date();
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330; // IST offset UTC +5:30
    let ISTTime = new Date(timestamp * 1000 + (ISTOffset + currentOffset) * 60000); // Calculate the date and time in IST (Indian Standard Time)
    let dateIST = getTwodigitFormat(ISTTime.getDate());
    let monthIST = getTwodigitFormat(ISTTime.getMonth() + 1);
    let yearIST = ISTTime.getFullYear();
    let hoursIST = getTwodigitFormat(ISTTime.getHours());
    let minutesIST = getTwodigitFormat(ISTTime.getMinutes());

    // Return the formatted string representation of date and time
    return (
        dateIST +
        '-' +
        monthIST +
        '-' +
        yearIST +
        ' ' +
        hoursIST +
        ':' +
        minutesIST +
        ' '
    );
};

/**
 * Formats a timestamp into a string representation of date in the format: DD/MM/YYYY.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * getDateFormat(1687244413); returns 20/6/2023
 * @returns {string} - The formatted string representation of date.
 */
export const getDateFormat = (timestamp: number): string => {
    let currentTime = new Date();
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330; // IST offset UTC +5:30
    let ISTTime = new Date(timestamp * 1000 + (ISTOffset + currentOffset) * 60000); // Calculate the date and time in IST (Indian Standard Time)
    let dateIST = getTwodigitFormat(ISTTime.getDate());
    let monthIST = getTwodigitFormat(ISTTime.getMonth() + 1);
    let yearIST = ISTTime.getFullYear();
    return dateIST + '/' + monthIST + '/' + yearIST + ' '; // Return the formatted string representation of date
};

/**
 * Formats a UNIX timestamp into a string representation of date, month and year in DD Mmm, YYYY format.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * getDateMonth(1687244413); returns 20 Jun, 2023
 * @returns {string} - The formatted string representation of date, month and year.
 */
export const getDateMonth = (timestamp: number): string => {
    let currentTime = new Date();
    let currentOffset = currentTime.getTimezoneOffset();
    let ISTOffset = 330; // IST offset UTC +5:30
    let ISTTime = new Date(timestamp * 1000 + (ISTOffset + currentOffset) * 60000); // Calculate the date and time in IST (Indian Standard Time)
    let dateIST = ISTTime.getDate();
    let monthStr = MONTH[ISTTime.getMonth()];
    let yearIST = ISTTime.getFullYear();
    return dateIST + ' ' + monthStr + ', ' + yearIST + ' '; // Return the formatted string representation of date and month
};

/**
 * Converts milliseconds to a string representation of minutes, seconds, and milliseconds.
 * @param {number} millis - The number of milliseconds to be converted.
 * @example
 * millisToMinutesAndSeconds(1010); returns 0:01.010
 * @returns {string} - The formatted string representation of minutes, seconds, and milliseconds.
 */
export const millisToMinutesAndSeconds = (millis: number) => {
    let minutes = Math.floor(millis / 60000); // Calculate the number of minutes
    let seconds = ((millis % 60000) / 1000).toFixed(0); // Calculate the number of seconds
    let milliseconds = Math.floor(millis % 1000).toString().padStart(3, '0'); // Calculate the number of milliseconds
    return `${minutes}:${(parseInt(seconds) < 10 ? "0" : "")}${seconds}.${milliseconds}`; //If seconds is less than 10 put a zero in front.
};

