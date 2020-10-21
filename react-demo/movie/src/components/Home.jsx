import React, { Component } from 'react'
import '../index.scss'
import { Button } from 'antd'


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="qishi">
                    <Button>home</Button>
                </div>
            </div>
        )
    }
}
