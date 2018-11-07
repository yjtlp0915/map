import React, {
    Component
} from 'react';

import axios from 'axios'

class Read extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        this.getDate();
    }
    getDate = () => {
        var url = 'https://www.apiopen.top/satinGodApi?type=1&page=1'
        axios.get(url).then((res) => {
            console.log(res)
            this.setState({
                list: res.data.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="read">
               <ul>
                    {
                        this.state.list.map((val,key)=>{
                            if(val.type == 'gif'){
                                return(
                                    <li key={key}>
                                        <p>{val.text}</p>
                                        <img src={val.gif} />
                                        <p>{val.username}</p>
                                        <p>{val.passtime}</p>
                                        <hr/>
                                    </li>
                                )
                            }
                            if(val.type == 'video'){
                                return(
                                    <li key={key}>
                                        <p>{val.text}</p>
                                        <video width="95%" height="240" controls>
                                            <source src={val.video} type="video/mp4" />
                                        </video>
                                        <p>{val.username}</p>
                                        <p>{val.passtime}</p>
                                        <hr/>
                                    </li>
                                )
                            }
                            if(val.type == 'image'){
                                return(
                                    <li key={key}>
                                        <p>{val.text}</p>
                                        <img src={val.image} />
                                        <p>{val.username}</p>
                                        <p>{val.passtime}</p>
                                        <hr/>
                                    </li>
                                )
                            }
                        })
                    }
               </ul>
            </div>
        );
    }
}

export default Read;