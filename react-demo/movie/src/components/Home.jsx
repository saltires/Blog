import React, { Component } from 'react'
import '../index.scss'
import { Button } from 'antd'
import axios from 'axios'
import jsonp from 'jsonp'



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

    componentWillMount() {
        const url = ' https://www.easy-mock.com/mock/5f4fbecc66f90555e2209ea0/example'

        // const data = { 'bar': 123 };
        // const options = {
        //     method: 'GET',
        //     // headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //     // data: qs.stringify(data),
        //     url,
        // };
        // axios(options);

        jsonp(url,{},(err, response) => console.log(err,response))
    }
}
