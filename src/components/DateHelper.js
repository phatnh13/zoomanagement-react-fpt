export const DateHelper = {
    formatDate(dateString) {
        const originalDate = new Date(dateString);
        const year = originalDate.getFullYear();
        const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(originalDate.getDate()).padStart(2, '0');
        return `${day}/${month}/${year}`;
    },
    formatDateForQuery(dateString) {
        const originalDate = new Date(dateString);
        const year = originalDate.getFullYear();
        const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(originalDate.getDate()).padStart(2, '0');
        return `${year}%2F${month}%2F${day}`;
    },
    formatDateForInput(dateString) {
        const originalDate = new Date(dateString);
        const year = originalDate.getFullYear();
        const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(originalDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },
    getToday() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    },
    getNowTime() {
        const today = new Date();
        const hour = String(today.getHours()).padStart(2, '0');
        const minute = String(today.getMinutes()).padStart(2, '0');
        return `${hour}:${minute}`;
    },
    formatTime(time) {
        const [hour, minute] = time.split(':');
        return `${hour}:${minute}:00`;
    },
    isExpired(expirationDate) {
        const now = new Date();
        const expiry = new Date(expirationDate);
    
        return now > expiry;
    }
};