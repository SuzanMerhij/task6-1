const Essential_cards = (props) => {
  return (
    <div className="col-lg-4 col-sm-12 p-2 ">
      <div className="d-flex flex-column align-items-center">
        <div>
           <img src={props.img} alt="" />
        </div>
      <div className="d-flex flex-column align-items-center">
         <p class="text-body-tertiary">PERFECT CUT</p>
         <h6 className="text-dark">DUAL CAMERA</h6>
         <p className="text-center text-body-tertiary">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.!
         </p>
       </div>
      </div>
  </div>
  )
}

export default Essential_cards
