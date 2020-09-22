import axios from "axios";

const state = () => ({
    loading: false,
    result: []
})

// getters
const getters = {}

// actions
const actions = {
    recognize({state}, image) {
        state.loading = false;

        let headers = {
            'Content-Type': 'Application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
        };

        let body = {
            id: 1232131,
            name: 'check_passport',
            data: image
        };
        body = JSON.stringify(body);

        axios.post('http://cdo-project.online:3124/tasks/passports', body,{headers: headers})
            .then(({data}) => {
                console.log('data', data);
            })
            .catch(error => {
                console.log(error.response)
            })
    }
}

// mutations
const mutations = {
    setLoading(state, value) {
        state.loading = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
