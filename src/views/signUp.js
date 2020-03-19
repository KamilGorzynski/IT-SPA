import $ from 'jquery';

export const signUp = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Sign up</h1>');

    const signUpDiv = $(`
    <section class="signUpSection">
        <form class="converter">

        <input id="login" placeholder='Login' type="text"><br/>
        <input type="email" placeholder='Email' id="email" name="email"><br/>
        <input id="password" placeholder='Password' type="password"><br/>
        <input id="confirmPassword" placeholder='Confirm password' type="password"><br/>
        <button type="button" class="btn btn-secondary">Sign up</button>
        </form>
    </section>
    `);

    fragment.append(h1).append(signUpDiv);

    return fragment;
};
