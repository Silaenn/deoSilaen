const dbpool = require('../config/database')

const getALLUsers = () => {
    const SQLQuery = 'SELECT * FROM userss'

    return dbpool.execute(SQLQuery)
}

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO userss(name, email, address) VALUES ('${body.name}', '${body.email}', '${body.address}')`
return dbpool.execute(SQLQuery); 
}

const updateUser = (body, idUser) => {
    console.log('masuk')
    const SQLQuery = `UPDATE userss
    SET name='${body.name}', email='${body.email}', address='${body.address}' 
    WHERE id=${idUser}`;

    return dbpool.execute(SQLQuery);                  
}

const deleteUser = (idUser) => {
    const SQLQuery = `DELETE FROM userss WHERE id=${idUser}`

    return dbpool.execute(SQLQuery);
}

module.exports = {
    getALLUsers,
    createNewUser,
    updateUser,
    deleteUser
}