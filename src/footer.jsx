import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter  className='text-center text-dark text-lg-left' style={{backgroundColor:'rgb(180, 180, 180)'}}>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Connect With US</strong>
              </p>
            </MDBCol>
            <br></br>
            <MDBCol md='5' size='20' className='mb-4 mb-md-0'>
            <form>
            <div class="form-group">
            
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            </form>
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
            <button type="button" class="btn btn-warning">Submit</button>
            
           
            </MDBCol>
           
            
     
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgb(180, 180, 180)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <span className='text-dark' href='#' class="fw-bold">
          Sudhir Narayan Gomase
        </span>
      </div>
    </MDBFooter>
  );
}