import React from 'react'
import KakaoLogin from 'react-kakao-login'

class KaKaoSign extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: 'kakao',
            isSignUp: false
        }
        
    }
    componentDidMount(){ 
        window.Kakao.init('fcc43e6ec23a4ed3fee1804310e95d59');
    }
    
    logout = (res) => {
        console.log("logout");
        window.Kakao.Auth.logout();
    }
    
    responseKaKao = (res) => {
        console.log("call responseKaKao")
        this.setState({
            data: res,
            isSignUp: true
        })
        console.log(res)
    }
    
    responseFail = (err) => {
        alert(err);
    }
    
    render() {
        
        return (
            <div>
                {this.state.isSignUp 
                ? (
                    <p className="afterLogin">{this.state.name}님 어서오세요.</p>
                    ):(
                        <KakaoLogin
                        jsKey={"fcc43e6ec23a4ed3fee1804310e95d59"}
                        onSuccess={this.responseKaKao}
                        onFailure={this.responseFail}
                        getProfile={true}
                    />
                )}
            </div>
        );
    }
}

export default KaKaoSign;