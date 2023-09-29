import React from 'react'
import './NavBarComponent.css'
import { type } from '@testing-library/user-event/dist/type'
import { Checkbox, Col, Rate, Row } from 'antd'
const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <h1 className='NavBarItem'>{option}</h1>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ margin: 0 }} value={option.value}>{option.lable}</Checkbox>

                            )
                        })}



                    </Checkbox.Group>
                )

            case 'star':
                return options.map((option) => {
                    return (

                        <div style={{display: 'flex'} }>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span style={{marginLeft: '10px'}}>{`from ${option} stars`}</span>
                        </div>
                    )
                })

            default:
                return {}
        }
    }

    return (
        <div>
            <h4 className='lable'>Label</h4>
            <div className='NavBarContent'>
                {renderContent('text', ['NIKE', 'ADIDAS', 'VANS'])}


            </div>
            <div className='NavBarContent'>
                {renderContent('checkbox', [
                    { value: '39', lable: '39' },
                    { value: '40', lable: '40' },
                    { value: '40.5', lable: '40.5' },
                    { value: '41', lable: '41' },
                    { value: '42', lable: '42' },
                ])}
            </div>
            <div className='NavBarContent'>
                {renderContent('star', [
                    3, 4, 5
                ])}
            </div>
        </div>
    )
}

export default NavBarComponent