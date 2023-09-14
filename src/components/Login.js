import React from "react";

const Login = () => {
    return (
        <div className="login-form">
            <h2 className="text-center">Log in</h2>
            <form method="post">
                <label for="UserName" >User Name</label>
                <input type="text" name="UserName" id="UserName" placeholder="User Name" />
                <label for="Password" >Password</label>
                <input type="password" name="Password" id="Password" placeholder="Password" />
                <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </form>
        </div>
    );
};

export default Login;