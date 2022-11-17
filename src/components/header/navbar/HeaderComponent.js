import "./Header.css"

const handleLoginButton = (event) => {
    event.preventDefault()
    window.location.href = "/Loginform"
}
const handleSearchButton = (event) => {
    event.preventDefault()
    window.location.href = "/Search"
}
const HeaderComponent = (props) => (
    <div className="header">
        <nav className="navbar navbar-expand-sm bg-light fixed-top sticky_top">
            <div className="container-fluid">
                <div className="brand_name_logo">
                    <img className="brand_logo" src="./movieicon.png" alt="not found" />
                    <a className="navbar-brand" href="/">MVP Play</a>
                </div>
                <form className="d-flex">
                    <input
                        // onClick={handleSearchButton}
                        className="form-control me-sm-2"
                        type="text"
                        placeholder="Search"
                        onChange={e => props.setSearchValue(e.target.value)}

                    />
                </form>
                <svg
                    onClick={handleLoginButton}
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                </svg>
            </div>
        </nav >
    </div >
)

export default HeaderComponent;
