
import "../styles/Login.css";

function Login() {
    return (
        <div className="background">
        <div className="lamp"></div>
        <div className="login-container">
            <h2>Login</h2>
            <form>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
        
            </div>

            <div className="input-box">
                <input type="password" placeholder="Password" required />
            </div>

            <div className="options">
                <label>
                <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>

            <p className="register-text">
                Don’t have an account? <a href="#">Register</a>
            </p>
            </form>
        </div>
        </div>
    );
}

export default Login;
