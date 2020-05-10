class DateHelper {
    static getAge(dobStr) {
        let now = new Date();
        let dob = new Date(dobStr);
        var diff = now.getTime() - dob.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }

    static getDateOnly(dobStr) {
        let dob = new Date(dobStr);
        return dob.toLocaleDateString();
    }

    static toLocaleDateTimeString(dateStr) {
        let date = new Date(dateStr);

        return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
    }
}

export default DateHelper;