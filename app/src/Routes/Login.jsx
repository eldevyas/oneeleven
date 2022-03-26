import React from 'react'

function Login() {
    return (
        <div class="align">

        <div class="grid">

            <form action="https://httpbin.org/post" method="POST" class="form login">

            <div class="form__field">
                <label for="login__username"><span class="hidden">Username</span></label>
                <input autocomplete="username" id="login__username" type="text" name="username" class="form__input" placeholder="Username" required/>
            </div>

            <div class="form__field">
                <label for="login__password"><span class="hidden">Password</span></label>
                <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required/>
            </div>

            <div class="form__field">
                <input type="submit" value="Sign In"/>
            </div>

            </form>

            <p class="text--center">Not a member? <a href="#">Sign up now</a></p>

        </div>
    </div>
    )
}

export default Login;