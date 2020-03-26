import $ from 'jquery';

export const signUp = () => {
    const fragment = $(new DocumentFragment());

    const h1 = $('<h1>Sign Up</h1>');

    const signUpDiv = $(`
        <div class="signUpDiv">
            <section class="signUpSection">
                <form>
                    <input class="login" placeholder='Login' type="text"><br/>
                    <input type="email" placeholder='Email' class="email" name="email"><br/>
                    <input class="password" id="password" placeholder='Password' type="password">
                    <label id="passwordStrength" for="password"></label><br/>
                    <input class="confirmPassword" placeholder='Confirm password' type="password"><br/>
                    <input type="checkbox" id="privacyCheckobox" value="true">
                    <label for="privacyCheckobox">I agree to IT-SPA Privacy Policy.</label><br>
                    <button type="button" disabled class="signUpBtn btn btn-secondary">Sign up</button>
                </form>
            </section>
        </div>
    `);

    fragment.append(h1).append(signUpDiv);

    return fragment;
};
