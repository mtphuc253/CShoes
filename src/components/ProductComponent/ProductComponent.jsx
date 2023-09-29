import React from 'react';
import CardComponent from './CardComponent'; // Import CardComponent
import LoadMoreBtnComponent from '../LoadMoreBtnComponent/LoadMoreBtnComponent';

class ProductComponent extends React.Component {
    render() {
        return (
            <div className='Product'>
                <div className='hotProducts'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6'>
                            <CardComponent />
                        </div>
                    </div>
                </div>
                <div className='loadMore'>
                    <LoadMoreBtnComponent />
                </div>
            </div>
        );
    }
}

export default ProductComponent;
