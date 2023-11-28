

const ContactCards = (props) => {
    return (
        <div className="col-lg-4 col-sm-12 py-2">
            <div style={{backgroundColor:"#f9f9f9"}} className="card">
                <div className="card-body">
                    <h5 className="card-title text-dark py-1">{props.heading}</h5>
                    <p className="card-text text-dark">{props.paragraphe}</p>
                    <p className="card-text text-dark">{props.paragraphe}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactCards