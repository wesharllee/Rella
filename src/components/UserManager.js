export const getAllUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(res => res.json())
};

export const getUserById = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`)
        .then(res => res.json())
};

export const updateUser = (id, user) => {
    return fetch(`http://localhost:8088/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
};