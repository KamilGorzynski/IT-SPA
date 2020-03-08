import $ from 'jquery';
import {socialLink} from './socialLink';


export const footer = () => {
    const fragment = $(new DocumentFragment());

    const footerBar = $(`
        <footer>
            <div class="socialLinks">
            </div>
        
            <p class="text-muted">Copyright © IT SPA. All rights reserved.</p>
        </footer> 
    `);

    footerBar.find('.socialLinks').append(socialLink());

    fragment.append(footerBar);

    return fragment;
};