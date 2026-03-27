

export default class DateUtils {




    /**
 * Format a Date object as YYYY-MM-DD
 */

    static formatDate(dateObj) {
        const yyyy = dateObj.getFullYear();
        const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
        const dd = String(dateObj.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }

    static getFutureDOB(yearsAhead = 1) {
        const today = new Date();
        const futureYear = today.getFullYear() + yearsAhead;
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${futureYear}-${month}-${day}`;
    }

    static getDOBOlderThan100Years() {
        const today = new Date();
        const oldYear = today.getFullYear() - 101; // more than 100 years old
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${oldYear}-${month}-${day}`;
    }

    /**
     * Returns a leap year date (default next leap year is 2024)
     */
    static getLeapYearDOB(year = 2024) {
        return `${year}-02-29`;
    }


    static isValidMMDDYYYY(dateString) {
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        return regex.test(dateString);
    }

    static getMonthName(monthNumber) {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[parseInt(monthNumber, 10) - 1];
    }

}


