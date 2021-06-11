import api from './api';

const projectService = {
    getProject: async function (id = '') {
        return await api.get("/projects/" + id);
    },
    saveProject: async function (project) {
        return await api.post('/projects', project);
    },
    deleteProject: async function (id) {
        api.delete('projects/' + id);
    },
}


export default projectService;
