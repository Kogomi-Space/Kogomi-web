const checkLogin = async(user,pass) => {
    const url = 'http://main.zenith.blue:8000/auth'
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: false,
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({username: user, password: pass}),
    });
    const resjson = await res.json()
    const code = res.status;
    if (code !== 200){
        return false;

    }
    localStorage.setItem('token',resjson['Token'])
    return true;
}

export default checkLogin;
