class DateHelper {
    static getAge(dobStr) {
        return Math.floor(this.getDiff(dobStr) / (1000 * 60 * 60 * 24 * 365.25));
    }

    static getDiff(dateStr) {
        let now = new Date();
        let dob = new Date(dateStr);

        return now.getTime() - dob.getTime();
    }

    static getDateOnly(dobStr, lang = 'en-US') {
        let dob = new Date(dobStr);
        return dob.toLocaleDateString(lang);
    }

    static toLocaleDateTimeString(dateStr, lang = 'en-US') {
        let date = new Date(dateStr);

        return `${date.toLocaleDateString(lang)} at ${date.toLocaleTimeString(lang)}`;
    }

    static getDateTimeFormatFromLocale(lang, dateTime = false) {

        let dateFormat = 'MM/dd/yyyy';

        if (lang === 'fr-FR') {
            dateFormat = 'dd/MM/yyyy';
        }

        if (dateTime) {
            dateFormat += ' HH:mm:ss';
        }

        return dateFormat;
    }

    static now() {
        return new Date();
    }
}

export default DateHelper;