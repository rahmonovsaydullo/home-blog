import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

function App() {

  return (
    <>
      <header className="d-flex justify-content-between align-items-center text-center px-5 container-fluid py-3" style={{backgroundColor:"rgb(33, 37, 41)"}}>
        <div className="ms-5 text-white fw-normal fs-5">Start Bootstrap</div>

        <nav>
          <ul className="d-flex gap-3 list-unstyled align-items-center m-0">
            <li><a className="text-decoration-none ul-a" href="#">Home</a></li>
            <li><a className="text-decoration-none ul-a" href="#">About</a></li>
            <li><a className="text-decoration-none ul-a" href="#">Contact</a></li>
            <li><a className="text-decoration-none text-white" href="#">Blog</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='d-flex flex-column justify-content-center align-items-center border-bottom border-dark' style={{ height: "270px", backgroundColor: "lightgray" }}>
          <div className='fs-1 fw-bold'>
            Welcome to Blog Home!
          </div>
          <div className='fs-5 fw-light'>A Bootstrap 5 starter layout for your next blog homepage</div>
        </div>
        <section className='d-flex  px-5'>
          <div>
            <div className=' py-5 border-bottom'>
              <div className='d-flex flex-column justify-content-start border rounded' style={{ width: "850px" }}>
                <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="" />
                <div className='p-3'>
                  <div>January 1, 2023</div>
                  <div className='fs-2 fw-medium'>Featured Post Title</div>
                  <div className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                  </div>
                  <button className='btn btn-primary text-center' style={{ width: "130px" }}>Read more <FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
              </div>
              <div className='d-flex py-4 gap-4'>
                <div className='d-flex flex-column justify-content-start border rounded' style={{ width: "413px" }}>
                  <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                  <div className='p-3'>
                    <div>January 1, 2023</div>
                    <div className='fs-3 fw-medium'>Featured Post Title</div>
                    <div className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                    </div>
                    <button className='btn btn-primary text-center' style={{ width: "130px" }}>Read more <FontAwesomeIcon icon={faArrowRight} /> </button>
                  </div>
                </div>
                <div className='d-flex flex-column justify-content-start border rounded' style={{ width: "413px" }}>
                  <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                  <div className='p-3'>
                    <div>January 1, 2023</div>
                    <div className='fs-3 fw-medium'>Featured Post Title</div>
                    <div className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                    </div>
                    <button className='btn btn-primary text-center' style={{ width: "130px" }}>Read more <FontAwesomeIcon icon={faArrowRight} /> </button>
                  </div>
                </div>
              </div>
              <div className='d-flex pt-4 pb-2 gap-4'>
                <div className='d-flex flex-column justify-content-start border rounded' style={{ width: "413px" }}>
                  <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                  <div className='p-3'>
                    <div>January 1, 2023</div>
                    <div className='fs-3 fw-medium'>Featured Post Title</div>
                    <div className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.
                    </div>
                    <button className='btn btn-primary text-center' style={{ width: "130px" }}>Read more <FontAwesomeIcon icon={faArrowRight} /> </button>
                  </div>
                </div>
                <div className='d-flex flex-column justify-content-start border rounded' style={{ width: "413px" }}>
                  <img src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="" />
                  <div className='p-3'>
                    <div>January 1, 2023</div>
                    <div className='fs-3 fw-medium'>Featured Post Title</div>
                    <div className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.
                    </div>
                    <button className='btn btn-primary text-center' style={{ width: "130px" }}>Read more <FontAwesomeIcon icon={faArrowRight} /> </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center py-4'>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item "><a class="page-link" href="#">Newer</a></li>
                  <li class="page-item active"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">...</a></li>
                  <li class="page-item"><a class="page-link" href="#">15</a></li>
                  <li class="page-item"><a class="page-link" href="#">Older</a></li>
                </ul>
              </nav>
            </div>


          </div>

          <div>
            <div className='d-flex flex-column justify-content-start border rounded m-5' style={{ width: "413px" }}>
              <div className='d-flex flex-column justify-content-start p-2 border-bottom' style={{ backgroundColor: "rgb(247, 247, 247)" }}>Search</div>
              <div className='p-3 d-flex justify-content-center'>
                <input type="text" className='w-75' placeholder='Enter search term...' />
                <button className='btn btn-primary text-center'>Go!</button>
              </div>
            </div>
            <div className='d-flex flex-column justify-content-start border rounded m-5' style={{ width: "413px" }}>
              <div className='d-flex flex-column justify-content-start p-2 border-bottom' style={{ backgroundColor: "rgb(247, 247, 247)" }}>
                Categories
              </div>
              <div className='d-flex gap-5 pt-3'>
                <div>
                  <ul>
                    <li><a href="">Web Design</a></li>
                    <li><a href="">HTML</a></li>
                    <li><a href="">Freebies</a></li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li><a href="">JavaScript</a></li>
                    <li><a href="">CSS</a></li>
                    <li><a href="">Tutorials</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column justify-content-start border rounded m-5' style={{ width: "413px" }}>
              <div className='d-flex flex-column justify-content-start p-2 border-bottom' style={{ backgroundColor: "rgb(247, 247, 247)" }}>Side Widget</div>
              <div className='p-3 d-flex justify-content-center'>
                You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='d-flex justify-content-center align-items-center p-5 text-white' style={{backgroundColor:"rgb(33, 37, 41)"}}>
        <div>
        Copyright &copy; Your Website 2023
        </div>
      </footer>
    </>
  )
}

export default App
