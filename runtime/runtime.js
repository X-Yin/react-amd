import requireJS from './utils/requirejs';
import React from 'react';
import axios from 'axios';

const mas = {
    log() {
        console.log('react-amd runtime');
    },
    require: (moduleId) => {
        const modulePath = `http://localhost:3004/components/${moduleId}.js`;
        return new Promise(async (resolve, reject) => {
            const { data } = await axios.get(modulePath);
            eval(data);
            requireJS.require([moduleId], function(data) {
                resolve(data);
            });
        });
    },
    axios
}

requireJS.define('react', [], function() {
    return React;
});

window.mas = mas;
export default mas;