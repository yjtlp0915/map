import React, {
    Component
} from 'react';

import axios from 'axios'

class Weather extends Component {
    constructor() {
        super()
        this.state = {
            li: {},
            list: [],
            yesterday: ""
        }
    }
    componentDidMount() {
        this.getDate();
    }
    getDate = () => {
        var url = 'https://www.apiopen.top/weatherApi?city=%E6%88%90%E9%83%BD'
        axios.get(url).then((res) => {
            console.log(res)
            this.setState({
                li: res.data.data,
                list: res.data.data.forecast,
                yesterday: res.data.data.yesterday
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="Weather">
                <div className="city">
                    <h2>{this.state.li.city}</h2>
                    <p>{this.state.li.ganmao}</p>
                </div>
                <ul>
                    <div className="wea">
                        <p>
                            <span>{this.state.yesterday.date}</span>
                            <span>{this.state.yesterday.type}</span>
                        </p>
                        <p>
                            <span>{this.state.yesterday.high}</span>
                            <span>{this.state.yesterday.low}</span>
                        </p>
                        <p>{this.state.yesterday.fl}</p>
                        <p>{this.state.yesterday.fx}</p>
                    </div>
               </ul>
                    {
                        this.state.list.map((val,key)=>{
                            return(
                                <ul>
                                    <div key={key} className="wea">
                                        <p>
                                            <span>{val.date}</span>
                                            <span>{val.type}</span>
                                        </p>
                                        <p>
                                            <span>{val.high}</span>
                                            <span>{val.low}</span>
                                        </p>
                                        <p>{val.fengli}</p>
                                        <p>{val.fengxiang}</p>
                                    </div>
                                </ul>
                            )

                        })
                    }
            </div>
        );
    }
}

export default Weather;