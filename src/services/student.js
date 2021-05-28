import api from 'api';


async function getStudent(id) {
    return await api.get("/student/" + id);
}
