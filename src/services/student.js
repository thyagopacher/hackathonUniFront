import api from './api';

const studentService = {
    createSession: async function (id = '') {
        return await api.get("/createSession/" + id);
    },
    getSession: async function () {
        return await api.get("/getSession");
    },
    getStudent: async function (id = '') {
        return await api.get("/studends/" + id);
    },
    saveStudent: async function (student) {
        return await api.post('/students', student);
    },
    deleteStudent: async function (id) {
        api.delete('students/' + id);
    },
    login: async function (formLogin) {
        api.post('login/', formLogin);
    }
}


export default studentService;
