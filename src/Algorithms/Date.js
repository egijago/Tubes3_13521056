class Date {
    static dayName(day, month, year) {
        /*
        function return name of the day from given date using Zeller's congruence
        */
        const days = ['Sabtu', 'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
    
        if (month < 3) {
            month += 12;
            year--;
        }
        let q = day;
        let m = month;
        let k = year % 100;
        let j = Math.floor(year / 100);
        let h = (
                q 
                + Math.floor((13 * (m + 1)) / 5) 
                + k 
                + Math.floor(k / 4) 
                + Math.floor(j / 4) 
                + 5 * j
                ) % 7;
        return days[h];
    }

    
    static isValid(day, month, year) {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month < 1 || month > 12) {
            return false;
        }
        if (month === 2 && (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) && day == 29) {
            return true;
        }
        return (day >= 0 && day <= daysInMonth[month - 1]);
    }
}

module.exports = Date;