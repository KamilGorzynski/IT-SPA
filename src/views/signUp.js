import $ from 'jquery';

export const signUp = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Sign Up</h1>');

    const signUpDiv = $(`
    <section class="signUpSection">
        <form>
            <input class="login" placeholder='Login' type="text"><br/>
            <input type="email" placeholder='Email' class="email" name="email"><br/>
            <input class="password" placeholder='Password' type="password"><br/>
            <input class="confirmPassword" placeholder='Confirm password' type="password"><br/>
            <button type="button" class="signUpBtn btn btn-secondary">Sign up</button>
        </form>
    </section>
    `);

    fragment.append(h1).append(signUpDiv);

    return fragment;
};
