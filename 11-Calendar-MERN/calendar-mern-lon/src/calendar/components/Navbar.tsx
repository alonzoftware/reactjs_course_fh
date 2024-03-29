//For ICONS USE CDN FontAwesome in index.html https://cdnjs.com/libraries/font-awesome
export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-brand">
                <i className="fas fa-calendar-alt"></i>
                &nbsp;
                Alonzo
            </span>
            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i>
                <span>Exit</span>
            </button>
        </div>
    )
}
