import api from './api';

const studentService = {
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
