import { treatmentCard } from './treatmentCard';
import { serviceInactive } from '../common/serviceInactive';
import { addListeners } from './addTreatmentToCart';


const axios = require('axios').default;

export function getTreatmentsData(){
    const treatmentsDiv = document.querySelector('.treatments');  
    axios.get('http://localhost:5000/treatments')
    .then(function (response) {
       response.data.map(treatment => treatmentsDiv.append(treatmentCard(treatment)));
       addListeners();
    })
    .catch(function (error) {
        treatmentsDiv.append(serviceInactive())
    });
}