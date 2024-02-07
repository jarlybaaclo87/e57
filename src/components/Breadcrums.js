import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Breadcrums = () => {
  return (
    <div className='mx-5 my-5'>
        <h1 className='mx-4'>Breadcrumb</h1>
    <Breadcrumb className='mx-4'>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    </div>
  );
};

export default Breadcrums;
