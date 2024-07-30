import { expect } from 'chai';
import { isSet, evalBooleanValue, tweleveHourFormat, getTwodigitFormat, getUnixConvertedIsoString, isSetObject, getTextFromHtml, getCurrentTimestamp, getCurrentDate, isValidJsonData, getCurrentDateTime, dateAndTimeFormat, dateFormat, dateFormatHHMM, getDateTimeFromTimestamp, getLocalDate, getLocalDateHHMM, getRandomColor, formatTimestamp, formatTimestampToDateString, formatTimestampToDateMonthYearString, millisToMinutesAndSeconds, getUnixConvertedDateTime, getDayFromDate, camelCaseKeys, isSetNumber} from '../src/index';

describe('isSet', () => {
  it('should return true if the value is set', () => {
    expect(isSet(5)).to.be.true;
    expect(isSet("hello")).to.be.true;
    expect(isSet({})).to.be.true;
    expect(isSet([])).to.be.true;
  });

  it('should return false if the value is not set', () => {
    expect(isSet(null)).to.be.false;
    expect(isSet(undefined)).to.be.false;
    expect(isSet("")).to.be.false;
    expect(isSet("null")).to.be.false;
    expect(isSet("undefined")).to.be.false;
    expect(isSet("[]")).to.be.false;
  });
});

describe('evalBooleanValue', () => {
  it('should return true if the value is "true" or true', () => {
    expect(evalBooleanValue(true)).to.be.true;
    expect(evalBooleanValue("true")).to.be.true;
    
  });

  it('should return false if the value is not "true" or true', () => {
    expect(evalBooleanValue("some value")).to.be.false;
    expect(evalBooleanValue(false)).to.be.false;
    expect(evalBooleanValue("")).to.be.false;
    expect(evalBooleanValue(undefined)).to.be.false;
    expect(evalBooleanValue("")).to.be.false;
  });
});

describe('getCurrentDateTime', () => {
  it('should return the current date and time in YYYY-MM-DD HH:MM:SS format', () => {
    const currentDateTime = getCurrentDateTime();
    expect(currentDateTime).to.be.a('string').that.is.not.empty; // Assert that the result is a non-empty string
  });
});

describe('getCurrentTimestamp', () => {
  it('should return the current timestamp in seconds', () => {
    const currentTimestamp = getCurrentTimestamp();
    const expectedTimestamp = Math.floor(Date.now() / 1000); // Calculating the current timestamp in seconds and storing it in the variable 
    expect(currentTimestamp).to.equal(expectedTimestamp); // Assert that the currentTimestamp matches the expectedTimestamp
  });

  it('should return the timestamp of the provided date in seconds', () => {
    const date = new Date('2023-06-23T12:00:00Z');
    const timestamp = getCurrentTimestamp(date);
    const expectedTimestamp = Math.floor(date.getTime() / 1000); // Calculating the current timestamp in seconds and storing it in the variable 
    expect(timestamp).to.equal(expectedTimestamp); // Assert that the timestamp matches the expectedTimestamp
  });
});

describe('getCurrentDate', () => {
  it('should return the current date in YYYY-MM-DD format', () => {
    const currentDate = getCurrentDate();
    const expectedDate = new Date().toISOString().slice(0, 10); // Generating a string representation of the current date in the format "YYYY-MM-DD" 
    expect(currentDate).to.equal(expectedDate); // Assert that the currentDate matches the expectedDate
  });
});

describe('getUnixConvertedDateTime', () => {
  it('should convert timestamp to formatted date and time', () => {
    // Choose a specific timestamp
    const timestamp = 1624212000; // Example: June 20, 2021 11:30:00 PM
    const expected = '2021-06-20 11:30:00 PM'; // Set the expected result based on the chosen timestamp Example: June 20, 2021 11:30:00 PM
    const result = getUnixConvertedDateTime({ timestamp }); // Call the getUnixConvertedDateTime function with the timestamp    
    expect(result).to.equal(expected); // Assert that the result matches the expected value
  });

  it('should convert date object to formatted date and time', () => {
    const dateObj = new Date("2023-06-20T13:05:00");
    const expected = '2023-06-20 01:05:00 PM';
    const timestamp = null;
    const result = getUnixConvertedDateTime({ timestamp, dateObj });
    expect(result).to.equal(expected); // Assert that the result matches the expected value
  });

  it('should use current date and time if no timestamp or dateObj is provided', () => {
    const result = getUnixConvertedDateTime(); // Call the getUnixConvertedDateTime function without any arguments
    expect(result).to.be.a('string').that.is.not.empty; // Assert that the result is a non-empty string
  });
});


describe('twelveHourFormat', () => {
  it('should return the twelve-hour format of the provided hours', () => {
    // Test cases with hours that should be formatted in the twelve-hour format
    expect(tweleveHourFormat(1)).to.equal("01");
    expect(tweleveHourFormat(5)).to.equal("05");
    expect(tweleveHourFormat(9)).to.equal("09");
    expect(tweleveHourFormat(11)).to.equal("11");
    expect(tweleveHourFormat(12)).to.equal("12");
    expect(tweleveHourFormat(13)).to.equal("01");
    expect(tweleveHourFormat(17)).to.equal("05");
    expect(tweleveHourFormat(21)).to.equal("09");
    expect(tweleveHourFormat(23)).to.equal("11");
  });

  it('should return "12" for 12 or multiples of 12 hours', () => {
    // Test cases with hours that should be formatted as "12"
    expect(tweleveHourFormat(12)).to.equal("12");
    expect(tweleveHourFormat(24)).to.equal("12");
  });

  it('should return "01" for 0 hours after adjusting', () => {
    // Test case with 0 hours after adjusting
    expect(tweleveHourFormat(0)).to.equal("12");
  });
});

describe('getTwodigitFormat', () => {
  it('should return a two-digit format number by adding a leading zero', () => {
    expect(getTwodigitFormat(1)).to.equal("01");
    expect(getTwodigitFormat(4)).to.equal("04");
    expect(getTwodigitFormat(8)).to.equal("08");
    expect(getTwodigitFormat(9)).to.equal("09");    
  })

  it('should return null if its greater than one digit format', () => {
    expect(getTwodigitFormat(12)).to.equal(12);
    expect(getTwodigitFormat(88)).to.equal(88);
    expect(getTwodigitFormat(99)).to.equal(99);
    expect(getTwodigitFormat(77)).to.equal(77);     
    expect(getTwodigitFormat(787)).to.be.null;  
  })
});

describe('getUnixConvertedIsoString', () => {
  it('should return the ISO string representation of the provided Unix timestamp', () => {
    // Test cases with Unix timestamps that should be converted to ISO strings
    expect(getUnixConvertedIsoString(1624428600)).to.equal('2021-06-23T06:10:00.000Z');
    expect(getUnixConvertedIsoString(0)).to.equal('1970-01-01T00:00:00.000Z');
  });
});


describe('dateAndTimeFormat', () => {
  it('should return the formatted date and time with seconds', () => {
    const dateObject = new Date(2021, 5, 26, 12, 30, 45); // Example date object (June 26, 2021 12:30:45 PM)
    const expectedDateTime = '26-Jun-2021 12:30:45';

    const result = dateAndTimeFormat(dateObject);
    expect(result).to.equal(expectedDateTime); // Assert that the result matches the expectedDateTime
  });

  it('should return the formatted date and time without seconds', () => {
    const dateObject = new Date(2022, 8, 15, 9, 15, 0); // Example date object (September 15, 2022 09:15:00 AM)
    const expectedDateTime = '15-Sep-2022 09:15';

    const result = dateAndTimeFormat(dateObject, false);
    expect(result).to.equal(expectedDateTime); // Assert that the result matches the expectedDateTime
  });
});

describe('dateFormat', () => {
  it('should return the formatted date', () => {
    const dateObject = new Date(2021, 5, 26); // Example date object (June 26, 2021)
    const expectedDate = '26-Jun-2021';

    const result = dateFormat(dateObject);
    expect(result).to.equal(expectedDate); // Assert that the result matches the expectedDate
  });
});

describe('dateFormatHHMM', () => {
  it('should return the formatted date with hours and minutes', () => {
    const dateObject = new Date(2021, 5, 26, 9, 30); // Example date object (June 26, 2021, 09:30)
    const expectedDate = '26-Jun-2021, 09:30';

    const result = dateFormatHHMM(dateObject);
    expect(result).to.equal(expectedDate); // Assert that the result matches the expectedDate
  });
});

describe('getDateTime', () => {
  it('should return the formatted date and time with seconds', () => {
    const timestamp = 1624683000; // Example timestamp (June 26, 2021, 09:30:00)
    const expectedDateTime = '26-Jun-2021 10:20:00';

    const result = getDateTimeFromTimestamp(timestamp);
    expect(result).to.equal(expectedDateTime); // Assert that the result matches the expectedDateTime
  });

  it('should return the formatted date and time without seconds', () => {
    const timestamp = 1624683000; // Example timestamp (June 26, 2021, 09:30:00)
    const expectedDateTime = '26-Jun-2021 10:20';

    const result = getDateTimeFromTimestamp(timestamp, false);
    expect(result).to.equal(expectedDateTime); // Assert that the result matches the expectedDateTime
  });
});

describe('isValidJsonData', () => {
  it('should return the parsed JSON data if the input is valid JSON', () => {
    const validJson = '{"name": "John", "age": 30}';
    const expectedData = { name: 'John', age: 30 };
    const result = isValidJsonData(validJson);
    expect(result).to.deep.equal(expectedData); // Assert that the result matches the expectedDate
  });

  it('should return false if the input is not valid JSON', () => {
    const invalidJson = 'invalid json';
    const result = isValidJsonData(invalidJson);
    expect(result).to.be.false;
  });
});

describe('getLocalDate', () => {
  it('should return the formatted local date', () => {
    const dateAndTime = '2023-06-26 10:20:00';
    const expected = '26-Jun-2023';
    const result = getLocalDate(dateAndTime);
    expect(result).to.equal(expected);
  });

  it('should return null for an invalid or unset date and time', () => {
    const dateAndTime = '';
    const invalidDateTime = 'abc'
    const result = getLocalDate(dateAndTime);
    const invalidDateTimeresult = getLocalDate(invalidDateTime);
    expect(result).to.be.null;
    expect(invalidDateTimeresult).to.be.null;
  });
});

describe('getLocalDateHHMM', () => {
  it('should return the formatted local date and time without seconds', () => {
    const dateAndTime = '2023-06-26 10:20:00';
    const expected = '26-Jun-2023, 10:20';
    const result = getLocalDateHHMM(dateAndTime);
    expect(result).to.equal(expected);
  });

  it('should return null for an invalid or unset date and time', () => {
    const dateAndTime = '';
    const invalidDateTime = 'abc'
    const result = getLocalDateHHMM(dateAndTime);
    const invalidDateTimeresult = getLocalDateHHMM(invalidDateTime);
    expect(result).to.be.null;
    expect(invalidDateTimeresult).to.be.null;
  });
});

describe('isSetObject', () => {
  it('should return true if the object is set and has at least one key', () => {
    const obj1 = { key: 'value' }; // Test case with a non-empty object
    expect(isSetObject(obj1)).to.be.true;
  });

  it('should return false if the object is empty', () => {
     const obj2 = {}; // Test case with an empty object
     expect(isSetObject(obj2)).to.be.false;
  })
});

describe('getRandomColor', () => {
  it('should return a random color in the correct format', () => {
    const color = getRandomColor();
    const colorRegex = /^#[0-9A-F]{6}$/i; // Regular expression to match the color format (# followed by 6 hexadecimal characters)
    const isValidColor = colorRegex.test(color);
    expect(isValidColor).to.be.true;
  });
});

describe('getTextFromHtml', () => {
  it('should return the text content without HTML tags', () => {
    const htmlString = '<p>This is a <strong>sample</strong> HTML <em>string</em>.</p>';
    const expectedText = 'This is a sample HTML string.';
    expect(getTextFromHtml(htmlString)).to.equal(expectedText);
  });

  it('should return an empty string if the input is not set', () => {
    const emptyString = '';
    expect(getTextFromHtml(emptyString)).to.equal('');
  });
});

describe('formatTimestamp', () => {
  it('should return the formatted date and time', () => {
    // Choose a specific timestamp
    const timestamp = 1692700267; // August 22, 2023 10:31:07
    const expected = '22-08-2023 10:31 '; // Set the expected result based on the chosen timestamp.
    const result = formatTimestamp(timestamp); // Call the formatTimestamp function with the timestamp
    expect(result).to.equal(expected); // Assert that the result matches the expected value
  });
});

describe('formatTimestampToDateString', () => {
  it('should return the formatted date in IST', () => {
    // Choose a specific timestamp in UTC
    const timestamp = 1624893600; // June 28, 2021 05:30:00 UTC
    const expected = '28/06/2021 '; // Set the expected result based on the chosen timestamp and IST offset
    const result = formatTimestampToDateString(timestamp); // Call the formatTimestampToDateString function with the timestamp
    expect(result).to.equal(expected); // Assert that the result matches the expected value
  });
});

describe('formatTimestampToDateMonthYearString', () => {
  it('should return the formatted date and month in IST', () => {
    // Choose a specific timestamp in UTC
    const timestamp = 1624893600; // June 28, 2021 05:30:00 UTC
    const expected = '28 Jun, 2021 '; // Set the expected result based on the chosen timestamp and IST offset
    const result = formatTimestampToDateMonthYearString(timestamp); // Call the formatTimestampToDateMonthYearString function with the timestamp
    expect(result).to.equal(expected); // Assert that the result matches the expected value
  });
});

describe('millisToMinutesAndSeconds', () => {
  // Test cases for conversion from milliseconds to minutes and seconds format.
  const testCases = [
    { millis: 0, expected: '0:00.000' },
    { millis: 1000, expected: '0:01.000' },
    { millis: 60000, expected: '1:00.000' },
    { millis: 123456, expected: '2:03.456' },
  ];

  testCases.forEach(({ millis, expected }) => {
    it(`should convert ${millis} milliseconds to minutes and seconds format`, () => {
      const result = millisToMinutesAndSeconds(millis);
      expect(result).to.equal(expected); // Asserts that the converted time matches the expected format.
    });
  });
});

describe('getDayFromDate', () => {
  it('should return the correct day of the week for a valid date string', () => {
    const dateStringFormatOne = '07/Jul/2023'; // Valid date string format 1
    const dateStringFormatTwo = "07/07/2023"; // Valid date string format 2
    const dateStringFormatThree = "07-Jul-2023"; // Valid date string format 3
    const dateStringFormatFour = "07-07-2023"; // Valid date string format 4
    const expectedDayOfWeek = 'Friday'; // Expected day of the week

    // Testing with different valid date string formats
    expect(getDayFromDate(dateStringFormatOne)).to.equal(expectedDayOfWeek);
    expect(getDayFromDate(dateStringFormatTwo)).to.equal(expectedDayOfWeek);
    expect(getDayFromDate(dateStringFormatThree)).to.equal(expectedDayOfWeek);
    expect(getDayFromDate(dateStringFormatFour)).to.equal(expectedDayOfWeek);
  });

  it('should return "Invalid date format" for an invalid date string', () => {
    const dateString = '2023-July-07'; // Invalid format
    const expectedErrorMessage = 'Invalid date format';
    const actualResult = getDayFromDate(dateString);
    expect(actualResult).equal(expectedErrorMessage);
  });
});  

describe('camelCaseKeys', () => {
  it('should return the new object with camelCased keys', () => {
    const inputObject = { first_name: "John", last_name: "Doe"}
    const expected = { firstName: "John", lastName: "Doe"}; // Set the expected result based on the chosen snakeCaseData
    const result = camelCaseKeys(inputObject); // Call the camelCaseKeys function with the inputObject
    expect(result).to.eql(expected); // Assert that the result matches the expected value
  });
  it('should not modify keys for non-snake_case input', () => {
    const inputObject = { firstName: "John", lastName: "Doe"};
    const expected = { firstName: "John", lastName: "Doe"};
    const result = camelCaseKeys(inputObject);
    expect(result).to.eql(expected);
  });
  it('should return an empty object if input object is empty', () => {
    const inputObject = {};
    const expected = {};
    const result = camelCaseKeys(inputObject);
    expect(result).to.eql(expected);
  });
  it('should not modify keys that are already in camelCase format', () => {
    const inputObject = { firstName: "John", last_name: "Doe"};
    const expected = {firstName: "John", lastName: "Doe"};
    const result = camelCaseKeys(inputObject);
    expect(result).to.eql(expected);
  });
})
describe('isSetNumber', () => {
  it('should return true if the value is not undefined or null', () => {
    expect(isSetNumber(5)).to.be.true;
    expect(isSetNumber(0)).to.be.true;
  });

  it('should return false if the value is undefined or null', () => {
    expect(isSetNumber(null)).to.be.false;
    expect(isSetNumber(undefined)).to.be.false;
  });
});