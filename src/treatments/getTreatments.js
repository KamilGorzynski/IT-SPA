import { treatmentCard } from './treatmentCard';
import {serviceInactive} from '../common/serviceInactive'


const axios = require('axios').default;

export function getTreatmentsData(){
    const treatmentsDiv = document.querySelector('.treatments');  
    axios.get('http://localhost:5000/treatments')
    .then(function (response) {
       response.data.map(treatment => treatmentsDiv.append(treatmentCard(treatment)));
    })
    .catch(function (error) {
        treatmentsDiv.append(serviceInactive())
    });
}