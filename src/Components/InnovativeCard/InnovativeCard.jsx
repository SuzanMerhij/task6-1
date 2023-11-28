

const InnovativeCard = (props) => {
    return (

        <div className="row p-2">
            <div className="col-12 d-flex  gap-3">
                {props.img ? 
                <>
                    <div  className="text-center">
                        <h5 className="text-dark">WHAT MAKES THE ESSENTIAL DIFFERENT?</h5>
                        <h6 className="text-body-tertiary">EXPERIENCE HIGH PERFORMANCE AND SECURE</h6>
                    </div>
                    <img src={props.img} />
                </>
                    : 
                <>
                    <img src={props.imgs} />  
                    <div  className="text-center">
                        <h5 className="text-dark">WHAT MAKES THE ESSENTIAL DIFFERENT?</h5>
                        <h6 className="text-body-tertiary">EXPERIENCE HIGH PERFORMANCE AND SECURE</h6>
                    </div>
                </>
                }
            </div>
        </div>

    )
}

export default InnovativeCard






