import api from './api';

const projectService = {
    getProject: async function (id = '') {
        if (id != "") {
            return await api.get("/projects/" + id);
        } else {
            return await api.get("/projects");
        }
    },
    saveProject: async function (project) {
        return await api.post('/projects', project);
    },
    deleteProject: async function (id) {
        api.delete('projects/' + id);
    }
}


export default projectService;
