import axios from 'axios';
import { BRANCHES } from '../../../global/api-endpoint';
import CustomStore from 'devextreme/data/custom_store';

const Branches = new CustomStore({
    key: 'ClientId',
    loadMode: 'raw',
    load: async () => {
        try {
            const response = await axios.get(BRANCHES.GETALL, { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
            const { data } = response;

            if (response.status === 200) return data;

            return false
        } catch (e) {
            console.log('Error', e.response.data);
        }
    },
    insert: async (values) => {
        
        try {
            const response = await axios.post(BRANCHES.POST, values, { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
            const { data } = response;
            
            if (response.status === 200) return data;

            return response.data.message
        } catch (e) {
            console.log('Error', e.response.data);
        }
    },
    remove: async (key) => {
        try {
            const response = await axios.delete(BRANCHES.DELETE(key), { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
            const { data } = response;
            
            if (response.status === 200) return data;

            return response.data.message
        } catch (e) {
            console.log('Error', e.response.data);
        }
    },
    update: async (key, values) => {
        try {
            const response = await axios.put(BRANCHES.UPDATE(key), values, { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } })
            const { data } = response;
            
            if (response.status === 200) return data;

            return response.data.message
        } catch (e) {
            console.log('Error', e.response.data);
        }
    }
});

export default Branches;
