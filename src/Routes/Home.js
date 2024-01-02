import React, { Fragment } from 'react';
import Nav from '../Components/Navbar/Nav';
import RecivedProduct from '../Components/Products/RecivedProduct';

const Home = () => {
  return (
    <Fragment>
        <Nav/>
        <RecivedProduct/>
    </Fragment>
  );
}

export default Home;
