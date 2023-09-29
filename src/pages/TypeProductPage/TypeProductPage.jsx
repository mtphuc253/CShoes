import React from 'react';
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent';
import CardComponent from '../../components/CardComponent/CardComponent';
import './TypeProductPage.css'; //
import { Pagination } from 'antd';

const TypeProductPage = () => {
    return (
        <>
            <div className="container">
                <div className="grid-container">
                    <div className="NavBarComponent">
                        <NavBarComponent />
                    </div>
                    <div className="CardComponent">
                        <div className='row'>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </div>

                    </div>
                </div>
            </div>
            <Pagination defaultCurrent={1} total={50} />

        </>

    );
};

export default TypeProductPage;
