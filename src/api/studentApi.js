function deleteStudent(userId) {
    console.log(`Delete user with ID: ${userId}`);
}

function editStudent(userId, newUserData) {
    console.log(`Edit user with ID: ${userId}, New Data: ${JSON.stringify(newUserData)}`);
}

async function addNewStudent(newStudentData) {
    try {


        const response = await fetch('http://localhost:3030/jsonstore/students', {  // POST request to the server
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStudentData)    // Convert the object to JSON string
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();
    }
    catch (error) {
        throw new Error(error.message);
    }
}

export { deleteStudent, editStudent, addNewStudent };