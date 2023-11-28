
const InnovativeCards = (props) => {
    return (

        <div className="row p-2">
            <div className="col-12 d-flex  gap-3">
                {props.img ? 
                <>
                    <div>
                        <h6 className="text-dark">INTELLIGENT PROCESSOR</h6>
                        <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                    </div>
                    <img src={props.img} alt="this is image" />
                </>
                    : 
                <>
                    <img src={props.imgs} alt="this is image" />  
                    <div>
                        <h6 className="text-dark">INTELLIGENT PROCESSOR</h6>
                        <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                    </div>
                </>}
            </div>
        </div>

    )
}

export default InnovativeCards






