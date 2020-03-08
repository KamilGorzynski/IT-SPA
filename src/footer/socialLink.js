import $ from 'jquery';
import Icon from "../assets/instagram.png";
import Icon2 from "../assets/facebook.png";
import Icon3 from "../assets/pinterest.png";

export const socialLink = () => {
    const fragment = $(new DocumentFragment());
    
    const socialLinkItem = $(`
        <a name="ss" href="https://pl.pinterest.com/" target="_blank">
            <img src="${Icon3}" />
        </a>
        <a name="ss" href="https://www.facebook.com/" target="_blank">
            <img src="${Icon2}" />
        </a>
        <a name="ss" href="https://www.instagram.com/?hl=pl" target="_blank">
            <img src="${Icon}" />
        </a>
    `);

    fragment.append(socialLinkItem);
    return fragment;
};



