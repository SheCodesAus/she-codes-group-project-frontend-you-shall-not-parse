import React from 'react';
// import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
      <div className='text-center p-3' style={{ backgroundColor: '#8246AF', color: "white", padding: "20px", textAlign:"center", marginTop: "200px" }}>
        SheCodes&copy; {new Date().getFullYear()} Copyright{' '}
      </div>
  );
}

export default Footer