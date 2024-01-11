const Utility = {
    displayVND: function (int) {
        let n = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(int);
        return n;
    },
    displayDate: function(date){
        // Display dd/mm/yyyy
        let displayDate = new Date(date);
        let yyyy = displayDate.getFullYear();
        let mm = displayDate.getMonth() + 1; // Months start at 0!
        let dd = displayDate.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        displayDate = dd + '/' + mm + '/' + yyyy;
        return displayDate;
    },
    isEmpty: function(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }
}
export default Utility;