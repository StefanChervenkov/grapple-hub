function deleteStudent(userId) {
    console.log(`Delete user with ID: ${userId}`);
}

function editStudent(userId, newUserData) {
    console.log(`Edit user with ID: ${userId}, New Data: ${JSON.stringify(newUserData)}`);
}

export { deleteStudent, editStudent };