import $ from 'jquery';
import Icon from "../assets/triangle.png";

export const serviceInactive = () => {
    return $(`
        <div class="serviceInactive">
            <h4>Sorry, service temporarily inactive</h4>
            <img src="${Icon}" />
        </div>    
    `)[0];
};