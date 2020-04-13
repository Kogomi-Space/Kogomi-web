function checkLogin(user,pass){
    if (user === 'dain98@gmail.com'){
        if (pass === 'asdf;lkj4'){
            return true;
        }
        alert("Incorrect Password!")
        return false;
    }
    alert("User not found!")
    return false;
}

export default checkLogin;
