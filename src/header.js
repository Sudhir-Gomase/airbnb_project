import'./header.css';
function header() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-light   ">
  <div class="container-fluid " >
    <a class="navbar-brand  fw-bold div1"  href="https://www.airbnb.co.in/" ><i class="fa-brands fa-airbnb fw-bold"> </i> airbnb</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="left d-flex">
          <a class="nav-link active host m-1" > Become a host </a>
         
          <a class="nav-link fw-bold icon m-1  " >  <i class="fa-solid fa-globe text-dark"> </i> </a>
          <a class="m-1 nav-link fw-bold  border border-dark-3 rounded-5 icon" > <i class="fa-solid fa-bars ml-1"></i>   <i class="fa-solid fa-user"></i> </a>
        </li>
       
       
      </ul>
     
    </div>
  </div>
 
</nav> <hr class="hr"></hr>
    </div>
  );
}

export default header;
