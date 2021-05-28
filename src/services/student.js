import api from './api';

const StudentService = {
    getStudent: async function (id = '') {
        return await api.get("/studends/" + id);
    },
    addStudent: async function (student) {
        return await api.post('/students', student);
    },
    deleteStudent: async function (id) {
        api.delete('students/' + id);
    }
}


export default StudentService;
