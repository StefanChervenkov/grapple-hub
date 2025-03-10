export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data))
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        callback(data, event.currentTarget)
    }
}

export function getFormData(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    return data;
}

export function showErrNotification(errorMessage) {
    const errorBoxDiv = document.getElementById('errorBox');
    errorBoxDiv.style.display = 'block';
    errorBoxDiv.querySelector('.msg').textContent = errorMessage;

    // Hide the error message after 3 seconds
    setTimeout(() => {
        errorBoxDiv.style.display = 'none';
        errorBoxDiv.querySelector('.msg').textContent = '';

    }, 3000);
}

export function checkEventCompleteness(event) {
    const requiredFields = ['title', 'startDate', 'endDate', 'startTime', 'endTime', 'location', 'description', 'eventImageUrl', 'moreInfo', 'category', 'organizer', 'priceBGN', 'capacity'];

    for (const field of requiredFields) {
        if (!event[field] || event[field].trim() === '') {//
            return false;
        }


    }
    return true;


}