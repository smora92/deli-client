import React from 'react';


function signUp() {
    return (
        <div className="signUp">
            <h2>Sign Up or Login</h2>
            <form className="signUp_form">
                <div>

                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="example@example.com"
                        required
                    />

                </div>

                <div>

                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        type="pwd"
                        name="pwd"
                        required
                    />

                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default signUp;

