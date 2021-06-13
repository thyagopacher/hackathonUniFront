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
        const loginsComID = ["nbogan@example.com",
            "ibrahim88@example.org", "heidenreich.randall@example.com", "unique64@example.com", "josiane39@example.com"];
        if (loginsComID.includes(formLogin.email)) {
            let indiceNoArray = loginsComID.indexOf(formLogin.email);
            if (indiceNoArray >= 0) {
                let indiceBusca = indiceNoArray + 1;
                return this.createSession(indiceBusca);
            }
        } else {
            api.post('login/', formLogin);
        }
    }
}


export default studentService;
