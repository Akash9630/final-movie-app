import { Link } from "react-router-dom"

import "./ErrorComponent.css"
const ErrorComponent = () => {
    return (
        <>
            < div className="refurbish" >
                <div className="std">
                    <div className="main-section page-not-found bg-paper-gray header-height-padding">
                        < div className="container-infinite viewport-height vertical-center" >
                            < div className="container-text text-center" >
                                < img src="error-image.png" alt="not found" style={{ width: "200px", height: "200px" }} />
                                <div className="text-strong font-headline-1" style={{ marginTop: "10px", color: "#000" }}>
                                    404: This page is unavailable
                                </div >
                                <p className="font-body-2" style={{ marginTop: "10px", color: "#000" }}>Double check your URL.</p>
                                <Link to="/" className="btn btn-ghost-red font-body-2" style={{ height: "50px", lineHeight: "48px", marginTop: "50px", maxWidth: "400px" }}>Go to Home</Link>
                            </div >
                        </div >
                    </div>
                </div>
            </div >
        </>
    )
}
export default ErrorComponent



