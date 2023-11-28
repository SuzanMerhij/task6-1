import Nav_icon from "../Nav_icon/Nav_icon"

const Footer = () => {
  return (
    <footer id="Footer">
        <div className="container py-2">
          <div className="row">
            <div className="d-flex justify-content-around flex-wrap">
              <p className="my-auto"> made by Suzan Merhij</p>
              <div id='fotter-icon'>
                <Nav_icon class={"bi bi-youtube"} />
                <Nav_icon class={"bi bi-wordpress"} />
                <Nav_icon class={"bi bi-xbox"} />
                <Nav_icon class={"bi bi-whatsapp"} />
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer