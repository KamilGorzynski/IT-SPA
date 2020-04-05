// home.js

import $ from 'jquery';

export const home = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Home</h1>');
    const p = $(`
    <div class="home col">
        <img src="https://images.unsplash.com/photo-1560932992-a93e9ca8a0c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
        <p>
        Quisque elementum dictum ex, nec semper nibh luctus id. Nunc a pharetra sapien. 
        Suspendisse interdum ac felis at sodales. Curabitur finibus neque non quam imperdiet,
         vitae aliquet felis ornare. Vivamus libero lectus, pellentesque in porttitor ac, tempor
          in mi. Fusce condimentum consectetur sem, ut imperdiet mauris malesuada ut. Donec eget 
          lectus consectetur, consequat est ut, aliquet augue. Aenean finibus rutrum ex at condimentum.
           Integer pulvinar ante vel eros gravida sagittis. Praesent et mauris in enim egestas cursus.
            Phasellus sollicitudin venenatis aliquet. Sed iaculis mi nulla, sed sollicitudin odio 
            sagittis sed. Nam quis lacus diam. Sed convallis, diam et tincidunt semper, velit massa 
            blandit mauris, vitae congue diam nisi nec libero. Aliquam facilisis, sapien vitae sodales
             viverra, nisi nunc rhoncus mi, sed egestas odio nulla ac erat.
             Quisque elementum dictum ex, nec semper nibh luctus id. Nunc a pharetra sapien. 
             Suspendisse interdum ac felis at sodales. Curabitur finibus neque non quam imperdiet,
              vitae aliquet felis ornare. Vivamus libero lectus, pellentesque in porttitor ac, tempor
               in mi. Fusce condimentum consectetur sem, ut imperdiet mauris malesuada ut. Donec eget 
               lectus consectetur, consequat est ut, aliquet augue. Aenean finibus rutrum ex at condimentum.
                Integer pulvinar ante vel eros gravida sagittis. Praesent et mauris in enim egestas cursus.
                 Phasellus sollicitudin venenatis aliquet. Sed iaculis mi nulla, sed sollicitudin odio 
                 sagittis sed. Nam quis lacus diam. Sed convallis, diam et tincidunt semper, velit massa 
                 blandit mauris, vitae congue diam nisi nec libero. Aliquam facilisis, sapien vitae sodales
                  viverra, nisi nunc rhoncus mi, sed egestas odio nulla ac erat.
                  Quisque elementum dictum ex, nec semper nibh luctus id. Nunc a pharetra sapien. 
                    Suspendisse interdum ac felis at sodales. Curabitur finibus neque non quam imperdiet,
                    vitae aliquet felis ornare. Vivamus libero lectus, pellentesque in porttitor ac, tempor
                    in mi. Fusce condimentum consectetur sem, ut imperdiet mauris malesuada ut. Donec eget 
                    lectus consectetur, consequat est ut, aliquet augue. Aenean finibus rutrum ex at condimentum.
                        Integer pulvinar ante vel eros gravida sagittis. Praesent et mauris in enim egestas cursus.
                        Phasellus sollicitudin venenatis aliquet. Sed iaculis mi nulla, sed sollicitudin odio 
                        sagittis sed. Nam quis lacus diam. Sed convallis, diam et tincidunt semper, velit massa 
                        blandit mauris, vitae congue diam nisi nec libero. Aliquam facilisis, sapien vitae sodales
                        viverra, nisi nunc rhoncus mi, sed egestas odio nulla ac erat.
        </p>
        </div>
    `);

    fragment.append(h1).append(p);

    return fragment;
};
