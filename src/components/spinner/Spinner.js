const Spinner = () => {
    return (
        <div style={{ "display": "flex", "justifyContent": "center" }} className="spinner-border mx-auto mt-5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner;