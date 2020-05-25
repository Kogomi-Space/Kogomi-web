const logOut = async() => {
    const url = 'http://main.zenith.blue:8000/clrtoken'
    const res = await fetch(url, {
        method: 'POST',
        withCredentials: false,
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({token: localStorage.getItem('token')}),
    });
    const resjson = await res.json();
    const code = res.status;
    console.log(code)
    if (code !== 200){
        return false;
    }
    localStorage.setItem('token',resjson['Token'])
    return true;
}

export default logOut;
