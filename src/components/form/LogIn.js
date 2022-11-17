import { SocialIcon } from "react-social-icons";
import { Link } from 'react-router-dom'
import "./Form.css"

function LoginForm() {
    const handleButton = (event) => {
        event.preventDefault()
        window.location.href = "/"
    }
    const SocialMediaIcon = () => (
        <div id="alternativeLogin">
            <label>Or sign in with</label>
            <div id="iconGroup">
                <SocialIcon
                    className="facebook" url="https://www.facebook.com/login/"
                />
                <SocialIcon
                    className="twitter" url="https://twitter.com/i/flow/login"
                />
                <SocialIcon
                    className="instagram" url="https://www.instagram.com/"
                />
            </div>
        </div>
    );
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Not registered yet?{" "}
                        <Link className="link" to="/SignupForm"><strong>Sign Up</strong></Link>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button title="click to continue dashboard" onClick={handleButton} type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="*">password?</a>
                    </p>
                </div>
                <SocialMediaIcon />
            </form>
        </div>
    )
}
export default LoginForm;