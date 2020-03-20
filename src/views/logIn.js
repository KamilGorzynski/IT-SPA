import $ from 'jquery';

export const logIn = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Log In</h1>');
    const logInDiv = $(`
    <section class="signUpSection">
        <form>
            <input class="login" placeholder='Login' type="text"><br/>
            <input class="password" placeholder='Password' type="password"><br/>
            <button type="button" class="logInpBtn btn btn-secondary">Log in</button>
        </form>
    </section>
    `);

    fragment.append(h1).append(logInDiv);

    return fragment;
};