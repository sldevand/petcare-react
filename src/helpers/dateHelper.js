class DateHelper {
    static getAge(dobStr) {
        let now = new Date();
        let dob = new Date(dobStr);
        var diff = now.getTime() - dob.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
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
}

export default DateHelper;