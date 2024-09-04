/**
 * Checks if the value provided is none of this - null, undefined, empty string, "undefined", empty array as string
 * @param {any} obj - The value to be checked.
 * @example
 * isSet("null"); returns false
 * @example
 * isSet("some value"); returns true
 * @return {Boolean} - true if the value is set, false otherwise.
 */
export declare const isSet: <T>(obj: T) => obj is Exclude<T, null | undefined | false | "false" | "null" | "[]" | "" | "undefined" | 0>;
/**
 * Checks if an object is set and not empty.
 * @param {object} obj - The object to be checked.
 * @example
 * isSetObject({ key1: "value1", key2: "value2" }); returns true
 * @example
 * isSetObject({}); returns false
 * @returns {boolean} - true if the object is set and not empty, false otherwise.
 */
export declare const isSetObject: (obj: object) => boolean;
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
export declare const evalBooleanValue: (value: string | boolean | undefined) => boolean;
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
export declare const getTwodigitFormat: (data: number) => string | number | null;
/**
 * Checks if a string is a valid JSON data by attempting to parse it.
 * @param {string} data - The string to be checked.
 * @example
 * isValidJsonData('{"test":"test"}'); returns { test: 'test' }
 * @example
 * isValidJsonData("abc"); returns false
 * @returns {object | boolean} - The parsed JSON data if it is valid, false otherwise.
 */
export declare const isValidJsonData: (data: string) => object | boolean;
/**
 * Generates a random color in hexadecimal format.
 * @example
 * getRandomColor(); returns #62C5B9
 * @returns {string} - The randomly generated color.
 */
export declare const getRandomColor: () => string;
/**
 * Copies the provided text to the clipboard.
 * @param {string} text - The text to be copied.
 * @example
 * handleCopyToClipboard("some text"); // text will be copied to clipboard
 * @returns {Promise<{ success: boolean, message?: string }>} - A promise that resolves to an object indicating the success status of the copy operation, and an optional error message.
 */
export declare const handleCopyToClipboard: (text: string) => Promise<{
    success: boolean;
    message?: undefined;
} | {
    success: boolean;
    message: string;
}>;
/**
 * Extracts text from an HTML string by removing HTML tags.
 * @param {string} htmlString - The HTML string from which to extract the text.
 * @example
 * getTextFromHtml("<h1>Title</h1><p>This is a paragraph.</p>"); returns TitleThis is a paragraph.
 * @returns {string} - The extracted text without HTML tags.
 */
export declare const getTextFromHtml: (htmlString: string) => string;
/**
 * Converts the keys of an object from snake_case to camelCase.
 * @param {{ [x: string]: string | number}} obj - The object whose keys should be camelCased.
 * @example
 * const snakeCaseData = { first_name: "John", last_name: "Doe"};
 * const camelCaseData = camelCaseKeys(snakeCaseData);
 * returns camelCaseData as { firstName: "John", lastName: "Doe"}
 * @returns {{ [x: string]: string | number}} - A new object with camelCased keys.
 */
export declare const camelCaseKeys: (obj: {
    [x: string]: string | number;
}) => {
    [x: string]: string | number;
};
/**
 * Converts hours to twelve hour format.
 * @param {number} hours - The hours to be formatted.
 * @example
 * tweleveHourFormat(13); returns 01
 * tweleveHourFormat(9); returns 09
 * @returns {string} - The formatted hour as a string.
 */
export declare const tweleveHourFormat: (hours: number) => string;
/**
 * This method returns current date time in YYYY-MM-DD HH:MM:SS format
 * @example
 * getCurrentDateTime(); returns 2023-06-20 12:22:20
 * @return {string} - returns current date time in YYYY-MM-DD HH:MM:SS format
 */
export declare const getCurrentDateTime: () => string;
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
export declare const getCurrentTimestamp: (date?: Date | null) => number;
/**
 * This method returns current date in YYYY-MM-DD format
 * @example
 * getCurrentDate(); returns 2023-06-20
 * @return {string} - returns current date in YYYY-MM-DD format
 */
export declare const getCurrentDate: () => string;
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
export declare const getDateTimeFromTimestamp: (timestamp: number, showSeconds?: boolean) => string | null;
/**
 * Retrieves the local date in a specific format from the provided date and time string.
 * @param {string} dateAndTime - The date and time string.
 * @example
 * getLocalDate("2023-06-20T13:05:00"); returns 20-Jun-2023
 * @returns {string} - The formatted local date string, or null if the dateAndTime parameter is not set.
 */
export declare const getLocalDate: (dateAndTime: string) => string | null;
/**
 * Retrieves the local date and time in a specific format from the provided date and time string.
 * @param {string} dateAndTime - The date and time string.
 * @example
 * getLocalDateHHMM("2023-06-20T13:05:00"); returns 20-Jun-2023, 13:05
 * @returns {string | null} - The formatted local date and time string, or null if the dateAndTime parameter is not set.
 */
export declare const getLocalDateHHMM: (dateAndTime: string) => string | null;
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
export declare const getUnixConvertedDateTime: ({ timestamp, dateObj, }?: {
    timestamp?: number | null;
    dateObj?: Date | null;
}) => string;
/**
 * Converts a timestamp to an ISO string representation.
 * @param {number | string} timestamp - The timestamp value to be converted.
 * @example
 * getUnixConvertedIsoString(1695193213); returns 2023-09-20T07:00:13.000Z
 * @returns {string} - The ISO string representation of the timestamp.
 */
export declare const getUnixConvertedIsoString: (timestamp: number) => string;
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
export declare const getDayFromDate: (dateString: string) => string;
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
export declare const dateAndTimeFormat: (dateObject: Date, showSeconds?: boolean) => string | null;
/**
 * Formats a Date object into a string representation of date in DD-Mmm-YYYY format.
 * @param {Date} dateObject - The Date object to be formatted.
 * @example
 * const date = new Date();
 * dateFormat(date); returns 20-Jun-2023
 * @returns {string | null} - The formatted string representation of date in DD-Mmm-YYYY format.
 */
export declare const dateFormat: (dateObject: Date) => string | null;
/**
 * Formats a Date object into a string representation of date and time in DD-Mmm-YYYY, HH:mm format.
 * @param {Date} dateObject - The Date object to be formatted.
 * @example
 * const data = new Date();
 * dateFormatHHMM(date); returns 20-Jun-2023, 13:05
 * @returns {string | null} - The formatted string representation of date and time in DD-Mmm-YYYY, HH:mm format.
 */
export declare const dateFormatHHMM: (dateObject: Date) => string | null;
/**
 * Converts a Unix timestamp to a string representing the date and time in the format: DD-MM-YYYY HH:mm.
 * @param {number} timestamp - The Unix timestamp to be formatted.
 * @example
 * formatTimestamp(1692700267); returns 22-08-2023 10:31
 * @returns {string} - The formated string representation of date and time.
 */
export declare const formatTimestamp: (timestamp: number) => string;
/**
 * Formats a timestamp into a string representation of date in the format: DD/MM/YYYY.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * formatTimestampToDateString(1687244413); returns 20/6/2023
 * @returns {string} - The formatted string representation of date.
 */
export declare const formatTimestampToDateString: (timestamp: number) => string;
/**
 * Formats a UNIX timestamp into a string representation of date, month and year in DD Mmm, YYYY format.
 * @param {number} timestamp - The timestamp to be formatted.
 * @example
 * formatTimestampToDateMonthYearString(1687244413); returns 20 Jun, 2023
 * @returns {string} - The formatted string representation of date, month and year.
 */
export declare const formatTimestampToDateMonthYearString: (timestamp: number) => string;
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
export declare const formatDuration: (totalSeconds: number | null) => string;
/**
 * Converts milliseconds to a string representation of minutes, seconds, and milliseconds.
 * @param {number} millis - The number of milliseconds to be converted.
 * @example
 * millisToMinutesAndSeconds(1010); returns 0:01.010
 * @returns {string} - The formatted string representation of minutes, seconds, and milliseconds.
 */
export declare const millisToMinutesAndSeconds: (millis: number) => string;
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
export declare const strToDate: (dateString: string, format: string) => Date | null;
/**
 * Checks if the value provided is not null
 * @param {number} value - The value to be checked.
 * @example
 * isSetNumber(1); returns true
 * @example
 * isSetNumber(0); returns true
 * @return {Boolean} - true if the value is not undefined or null, false otherwise.
 */
export declare const isSetNumber: (value?: number | null) => boolean;
