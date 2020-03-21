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
}

export default DateHelper;