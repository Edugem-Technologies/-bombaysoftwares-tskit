"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDuration = exports.camelCaseKeys = exports.strToDate = exports.getDayFromDate = exports.millisToMinutesAndSeconds = exports.getDateMonth = exports.getDateFormat = exports.formatTimestamp = exports.getTextFromHtml = exports.handleCopyToClipboard = exports.getRandomColor = exports.isSetObject = exports.getLocalDateHHMM = exports.getLocalDate = exports.isValidJsonData = exports.getDateTimeFromTimestamp = exports.dateFormatHHMM = exports.dateFormat = exports.dateAndTimeFormat = exports.getUnixConvertedIsoString = exports.getTwodigitFormat = exports.tweleveHourFormat = exports.getUnixConvertedDateTime = exports.getCurrentDate = exports.getCurrentTimestamp = exports.getCurrentDateTime = exports.evalBooleanValue = exports.isSet = void 0;
var constants_1 = require("./constants");
/**
* Checks if the value provided is none of this - null, undefined, empty string, "undefined", empty array as string
* @param {any} obj - The value to be checked.
* @example
* isSet("null"); returns false
* @example
* isSet("some value"); returns true
* @return {Boolean} - true if the value is set, false otherwise.
*/
var isSet = function (obj) {
    // check if the value is provided is any of the conditions.
    if (obj && obj !== "null" && obj !== undefined && obj !== "" && obj !== "[]" && obj !== "undefined" && typeof obj !== "undefined") {
        return true;
    }
    return false;
};
exports.isSet = isSet;
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
var evalBooleanValue = function (value) {
    return (value === "true" || value === true) ? true : false;
};
exports.evalBooleanValue = evalBooleanValue;
/**
* This method returns current date time in YYYY-MM-DD HH:MM:SS format
* @example
* getCurrentDateTime(); returns 2023-06-20 12:22:20
* @return {string} - returns current date time in YYYY-MM-DD HH:MM:SS format
*/
var getCurrentDateTime = function () {
    var date_ob = new Date();
    var date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    var month = ("0" + (date_ob.getMonth() + 1)); // adjust 0 before single digit month
    var year = date_ob.getFullYear(); // current year
    var hours = (0, exports.getTwodigitFormat)(date_ob.getHours()); // current hours
    var minutes = (0, exports.getTwodigitFormat)(date_ob.getMinutes()); // current minutes 
    var seconds = (0, exports.getTwodigitFormat)(date_ob.getSeconds()); // current seconds
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
var getCurrentTimestamp = function (date) {
    if (date === void 0) { date = null; }
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
var getCurrentDate = function () {
    var date_ob = new Date();
    var date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2); // current month
    var year = date_ob.getFullYear(); // current year
    return year + "-" + month + "-" + date; // prints date & time in YYYY-MM-DD format
};
exports.getCurrentDate = getCurrentDate;
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
var getUnixConvertedDateTime = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.timestamp, timestamp = _c === void 0 ? null : _c, _d = _b.dateObj, dateObj = _d === void 0 ? null : _d;
    var date_ob;
    if (dateObj instanceof Date) {
        date_ob = dateObj;
    }
    else if (timestamp) {
        date_ob = new Date(timestamp * 1000); // Multiplied the obtained time value by 1000 to convert it from seconds to milliseconds
    }
    else {
        date_ob = new Date();
    }
    var date = ("0" + date_ob.getDate()).slice(-2); // adjust 0 before single digit date
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2); // adjust 0 before single digit month
    var year = date_ob.getFullYear();
    var hours = date_ob.getHours();
    var minutes = date_ob.getMinutes();
    // converting the hours to 12 hour format
    var ampm = hours >= 12 ? "PM" : "AM";
    var newHour = (0, exports.tweleveHourFormat)(hours);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var seconds = date_ob.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return year + "-" + month + "-" + date + " " + newHour + ":" + minutes + ":" + seconds + " " + ampm;
};
exports.getUnixConvertedDateTime = getUnixConvertedDateTime;
/**
 * Converts hours to twelve hour format.
 * @param {number} hours - The hours to be formatted.
 * @example
 * tweleveHourFormat(13); returns 01
 * tweleveHourFormat(9); returns 09
 * @returns {string} - The formatted hour as a string.
 */
var tweleveHourFormat = function (hours) {
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours.toString().padStart(2, "0");
};
exports.tweleveHourFormat = tweleveHourFormat;
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
var getTwodigitFormat = function (data) {
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
 * Converts a timestamp to an ISO string representation.
 * @param {number | string} timestamp - The timestamp value to be converted.
 * @example
 * getUnixConvertedIsoString(1695193213); returns 2023-09-20T07:00:13.000Z
 * @returns {string} - The ISO string representation of the timestamp.
 */
var getUnixConvertedIsoString = function (timestamp) {
    var _timeStamp = typeof timestamp === "number" ? timestamp : parseInt(timestamp); // Convert the timestamp to a number if it is a string
    return new Date(_timeStamp * 1000).toISOString(); // Create a new Date object using the adjusted timestamp and convert it to an ISO string
};
exports.getUnixConvertedIsoString = getUnixConvertedIsoString;
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
var dateAndTimeFormat = function (dateObject, showSeconds) {
    if (showSeconds === void 0) { showSeconds = true; }
    if ((0, exports.isSet)(dateObject)) {
        var date = (0, exports.getTwodigitFormat)(dateObject.getDate()); // Get the two-digit formatted day
        var hour = (0, exports.getTwodigitFormat)(dateObject.getHours()); // Get the two-digit formatted hour
        var minutes = (0, exports.getTwodigitFormat)(dateObject.getMinutes()); // Get the two-digit formatted minute
        var seconds = (0, exports.getTwodigitFormat)(dateObject.getSeconds()); // Get the two-digit formatted second
        if (showSeconds) {
            // Format the string with date, month, year, hour, minute, and second
            return date + "-" + constants_1.MONTH[dateObject.getMonth()] + "-" + dateObject.getFullYear() + " " + hour + ":" + minutes + ":" + seconds;
        }
        else {
            // Format the string with date, month, year, hour, and minute (without seconds)
            return date + "-" + constants_1.MONTH[dateObject.getMonth()] + "-" + dateObject.getFullYear() + " " + hour + ":" + minutes;
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
var dateFormat = function (dateObject) {
    if ((0, exports.isSet)(dateObject)) {
        var date = (0, exports.getTwodigitFormat)(dateObject.getDate()); // Get the two-digit formatted day
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
var dateFormatHHMM = function (dateObject) {
    if ((0, exports.isSet)(dateObject)) {
        var date = (0, exports.getTwodigitFormat)(dateObject.getDate()); // Get the two-digit formatted day
        var hour = (0, exports.getTwodigitFormat)(dateObject.getHours()); // Get the two-digit formatted hour
        var minutes = (0, exports.getTwodigitFormat)(dateObject.getMinutes()); // Get the two-digit formatted minutes
        // Format the string with date, month, year, hour, and minutes
        return date + "-" + constants_1.MONTH[dateObject.getMonth()] + "-" + dateObject.getFullYear() + ", " + hour + ":" + minutes;
    }
    else {
        return null; // Return null if dateObject is not set
    }
};
exports.dateFormatHHMM = dateFormatHHMM;
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
var getDateTimeFromTimestamp = function (timestamp, showSeconds) {
    if (showSeconds === void 0) { showSeconds = true; }
    var dateObject = new Date(timestamp * 1000); // Convert the timestamp to a Date object
    return (0, exports.dateAndTimeFormat)(dateObject, showSeconds); // Format the Date object using dateAndTimeFormat function
};
exports.getDateTimeFromTimestamp = getDateTimeFromTimestamp;
/**
 * Checks if a string is a valid JSON data by attempting to parse it.
 * @param {string} data - The string to be checked.
 * @example
 * isValidJsonData('{"test":"test"}'); returns { test: 'test' }
 * @example
 * isValidJsonData("abc"); returns false
 * @returns {object | boolean} - The parsed JSON data if it is valid, false otherwise.
 */
var isValidJsonData = function (data) {
    var json_data;
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
 * Retrieves the local date in a specific format from the provided date and time string.
 * @param {string} dateAndTime - The date and time string.
 * @example
 * getLocalDate("2023-06-20T13:05:00"); returns 20-Jun-2023
 * @returns {string} - The formatted local date string, or null if the dateAndTime parameter is not set.
 */
var getLocalDate = function (dateAndTime) {
    if ((0, exports.isSet)(dateAndTime)) {
        var dateObject = new Date(dateAndTime); // Create a Date object from the provided date and time string
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
var getLocalDateHHMM = function (dateAndTime) {
    if ((0, exports.isSet)(dateAndTime)) {
        var dateObject = new Date(dateAndTime); // Create a Date object from the provided date and time string
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
 * Checks if an object is set and not empty.
 * @param {object} obj - The object to be checked.
 * @example
 * isSetObject({ key1: "value1", key2: "value2" }); returns true
 * @example
 * isSetObject({}); returns false
 * @returns {boolean} - true if the object is set and not empty, false otherwise.
 */
var isSetObject = function (obj) {
    if ((0, exports.isSet)(obj)) { // Check if the object is set using the isSet function
        return Object.keys(obj).length > 0 ? true : false; // Return true if the object has at least one key, indicating it is not empty
    }
    else {
        // Return false if the object is not set
        return false;
    }
};
exports.isSetObject = isSetObject;
/**
 * Generates a random color in hexadecimal format.
 * @example
 * getRandomColor(); returns #62C5B9
 * @returns {string} - The randomly generated color.
 */
var getRandomColor = function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    // Generate a random color by iterating 6 times
    for (var i = 0; i < 6; i++) {
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
var handleCopyToClipboard = function (text) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!((navigator === null || navigator === void 0 ? void 0 : navigator.clipboard) && (window === null || window === void 0 ? void 0 : window.isSecureContext))) return [3 /*break*/, 2];
                return [4 /*yield*/, navigator.clipboard.writeText(text)];
            case 1:
                _a.sent(); // Copy the text to the clipboard using the Clipboard API
                return [2 /*return*/, { success: true }]; // Return success status
            case 2:
                if (!(window === null || window === void 0 ? void 0 : window.isSecureContext)) {
                    return [2 /*return*/, { success: false, message: "Please host in the secure environment." }]; // Return error message indicating the need for a secure environment
                }
                return [2 /*return*/, { success: false, message: "Something went wrong" }]; // Return generic error message
        }
    });
}); };
exports.handleCopyToClipboard = handleCopyToClipboard;
/**
 * Extracts text from an HTML string by removing HTML tags.
 * @param {string} htmlString - The HTML string from which to extract the text.
 * @example
 * getTextFromHtml("<h1>Title</h1><p>This is a paragraph.</p>"); returns TitleThis is a paragraph.
 * @returns {string} - The extracted text without HTML tags.
 */
var getTextFromHtml = function (htmlString) {
    if ((0, exports.isSet)(htmlString)) {
        return htmlString.replace(/(<([^>]+)>)/ig, ''); // Use regular expression to remove HTML tags from the input HTML string
    }
    else {
        return ""; // Return an empty string if the input HTML string is not set
    }
};
exports.getTextFromHtml = getTextFromHtml;
/**
 * Converts a Unix timestamp to a string representing the date and time in the format: DD-MM-YYYY HH:mm.
 * @param {number} timestamp - The Unix timestamp to be formatted.
 * @example
 * formatTimestamp(1692700267); returns 22-08-2023 10:31
 * @returns {string} - The formated string representation of date and time.
 */
var formatTimestamp = function (timestamp) {
    // Create Date objects for the specified timestamp
    var Time = new Date(timestamp * 1000);
    // Extract date components
    var date = (0, exports.getTwodigitFormat)(Time.getUTCDate());
    var month = (0, exports.getTwodigitFormat)(Time.getUTCMonth() + 1);
    var year = Time.getFullYear();
    // Extract time components
    var hours = (0, exports.getTwodigitFormat)(Time.getUTCHours());
    var minutes = (0, exports.getTwodigitFormat)(Time.getUTCMinutes());
    // Return the formatted string representation of date and time
    return (date +
        '-' +
        month +
        '-' +
        year +
        ' ' +
        hours +
        ':' +
        minutes +
        ' ');
};
exports.formatTimestamp = formatTimestamp;
/**
 * Formats a timestamp into a string representation of date in the format: DD/MM/YYYY.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * getDateFormat(1687244413); returns 20/6/2023
 * @returns {string} - The formatted string representation of date.
 */
var getDateFormat = function (timestamp) {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330; // IST offset UTC +5:30
    var ISTTime = new Date(timestamp * 1000 + (ISTOffset + currentOffset) * 60000); // Calculate the date and time in IST (Indian Standard Time)
    var dateIST = (0, exports.getTwodigitFormat)(ISTTime.getDate());
    var monthIST = (0, exports.getTwodigitFormat)(ISTTime.getMonth() + 1);
    var yearIST = ISTTime.getFullYear();
    return dateIST + '/' + monthIST + '/' + yearIST + ' '; // Return the formatted string representation of date
};
exports.getDateFormat = getDateFormat;
/**
 * Formats a UNIX timestamp into a string representation of date, month and year in DD Mmm, YYYY format.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * getDateMonth(1687244413); returns 20 Jun, 2023
 * @returns {string} - The formatted string representation of date, month and year.
 */
var getDateMonth = function (timestamp) {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330; // IST offset UTC +5:30
    var ISTTime = new Date(timestamp * 1000 + (ISTOffset + currentOffset) * 60000); // Calculate the date and time in IST (Indian Standard Time)
    var dateIST = ISTTime.getDate();
    var monthStr = constants_1.MONTH[ISTTime.getMonth()];
    var yearIST = ISTTime.getFullYear();
    return dateIST + ' ' + monthStr + ', ' + yearIST + ' '; // Return the formatted string representation of date and month
};
exports.getDateMonth = getDateMonth;
/**
 * Converts milliseconds to a string representation of minutes, seconds, and milliseconds.
 * @param {number} millis - The number of milliseconds to be converted.
 * @example
 * millisToMinutesAndSeconds(1010); returns 0:01.010
 * @returns {string} - The formatted string representation of minutes, seconds, and milliseconds.
 */
var millisToMinutesAndSeconds = function (millis) {
    var minutes = Math.floor(millis / 60000); // Calculate the number of minutes
    var seconds = ((millis % 60000) / 1000).toFixed(0); // Calculate the number of seconds
    var milliseconds = Math.floor(millis % 1000).toString().padStart(3, '0'); // Calculate the number of milliseconds
    return "".concat(minutes, ":").concat((parseInt(seconds) < 10 ? "0" : "")).concat(seconds, ".").concat(milliseconds); //If seconds is less than 10 put a zero in front.
};
exports.millisToMinutesAndSeconds = millisToMinutesAndSeconds;
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
var getDayFromDate = function (dateString) {
    var dateFormats = ["DD-MMM-YYYY", "DD/MM/YYYY", "DD/MMM/YYYY"];
    var date = null;
    for (var _i = 0, dateFormats_1 = dateFormats; _i < dateFormats_1.length; _i++) {
        var format = dateFormats_1[_i];
        date = (0, exports.strToDate)(dateString, format);
        if (date)
            break;
    }
    if (!date) {
        return "Invalid date format";
    }
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = date.getDay();
    return days[dayOfWeek];
};
exports.getDayFromDate = getDayFromDate;
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
var strToDate = function (dateString, format) {
    var parts = dateString.split(/[\/-]/);
    var formatParts = format.split(/[-/]/);
    var dateObj = {};
    for (var i = 0; i < formatParts.length; i++) {
        var formatPart = formatParts[i].toUpperCase();
        var part = parts[i];
        if (formatPart === "DD") {
            dateObj.day = parseInt(part, 10); // Extract the day value and assign it to the date object
        }
        else if (formatPart === "MM") {
            dateObj.month = parseInt(part, 10) - 1; // Extract the month value and assign it to the date object
        }
        else if (formatPart === "MMM") {
            var monthMap = {
                'JAN': 0,
                'FEB': 1,
                'MAR': 2,
                'APR': 3,
                'MAY': 4,
                'JUN': 5,
                'JUL': 6,
                'AUG': 7,
                'SEP': 8,
                'OCT': 9,
                'NOV': 10,
                'DEC': 11
            };
            dateObj.month = monthMap[part.toUpperCase()]; // Map the three-letter month abbreviation to a numeric value and assign it to the date object
        }
        else if (formatPart === "YYYY") {
            dateObj.year = parseInt(part, 10); // Extract the year value and assign it to the date object
        }
    }
    var day = dateObj.day, month = dateObj.month, year = dateObj.year;
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return null; // Return null if any of the date components are not valid numbers
    }
    return new Date(year, month, day); // Construct a new Date object with the parsed year, month, and day
};
exports.strToDate = strToDate;
/**
* Converts the keys of an object from snake_case to camelCase.
* @param {{ [x: string]: string | number}} obj - The object whose keys should be camelCased.
* @example
* const snakeCaseData = { first_name: "John", last_name: "Doe"};
* const camelCaseData = camelCaseKeys(snakeCaseData);
* returns camelCaseData as { firstName: "John", lastName: "Doe"}
* @returns {{ [x: string]: string | number}} - A new object with camelCased keys.
*/
var camelCaseKeys = function (obj) {
    var camelCasedObj = {}; // Create an empty object to store the result with camelCased keys.
    for (var key in obj) { // Iterate through each property (key-value pair) in the input object.
        if (obj.hasOwnProperty(key)) { // Check if the property is a direct own property of the object (not inherited).
            var camelCasedKey = key.replace(/_([a-z])/g, function (_, match) { return match.toUpperCase(); }); // Convert the snake_case key to camelCase using regular expression.
            camelCasedObj[camelCasedKey] = obj[key]; // Add the property to the new object with the camelCased key.
        }
    }
    return camelCasedObj; // Return the new object with camelCased keys.
};
exports.camelCaseKeys = camelCaseKeys;
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
var formatDuration = function (totalSeconds) {
    // If totalSeconds is null, handle it by returning an empty string or a default value
    if (totalSeconds === null) {
        return "";
    }
    // Calculate the number of hours by dividing the total seconds by 3600 (the number of seconds in an hour)
    var hours = Math.floor(totalSeconds / 3600);
    // Calculate the number of minutes by first getting the remainder of the seconds divided by 3600 
    // (to get the leftover seconds after extracting hours), and then dividing by 60 (the number of seconds in a minute)
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    // Calculate the remaining seconds after extracting hours and minutes
    var seconds = totalSeconds % 60;
    // Initialize an empty string to build the formatted time
    var formattedTime = "";
    // Append the hours to the formatted string if there are any hours
    if (hours > 0) {
        formattedTime += "".concat(hours, "hr ");
    }
    // Append the minutes to the formatted string if there are any minutes
    if (minutes > 0) {
        formattedTime += "".concat(minutes, "min ");
    }
    // Append the seconds to the formatted string if there are any seconds
    if (seconds > 0) {
        formattedTime += "".concat(seconds, "sec");
    }
    // Return the formatted time string, trimmed to remove any trailing spaces
    return formattedTime.trim();
};
exports.formatDuration = formatDuration;
