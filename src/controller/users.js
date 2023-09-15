
const UserModel = require('../models/users')

const getALLUsers = async (req, res) => {
    try{
        const [data] = await UserModel.getALLUsers();

        res.json({
            message: 'GET users success',
            data: data
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: err
        })
    }  
}  

const createNewUser = async (req, res) => {
    const {body} = req;

    if(!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null, 
        })
    }

    try{
        await UserModel.createNewUser(body)
        res.status(201).json({
            message: 'CREATE new user success',
            data: body
        })    
    } catch (err) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: err
        })  
    }
    
}    

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UserModel.updateUser(body, idUser)
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            }
        })
    } catch (err) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: err
        })  
    }  
}

const deleTeUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UserModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: err
     })  
    }
}

module.exports = {
    getALLUsers,
    createNewUser,
    updateUser,
    deleTeUser
}