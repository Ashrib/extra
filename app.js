var bodyElement = document.getElementById("body");
var mainCont  = document.getElementById("main");
var mainOfSignup = document.getElementById("main-of-signup");
var mainOfSignin = document.getElementById("main-of-signin");
var userInfo;
// sign-up inputs
var userNameInp = document.getElementById("username-inp");
var passwordInp = document.getElementById("password-inp");
var cnfrm_passInp = document.getElementById("conf-password-inp");
var numberInp = document.getElementById("number-inp");
var emailInp = document.getElementById("email-inp");
var addressInp = document.getElementById("address-inp");
var dateOfBirthInp = document.getElementById("dob-inp");
var postalCodeInp = document.getElementById("postalcode-inp");
var profilePicInp = document.getElementById("userpic-inp");

function signUp(event) {
    event.preventDefault();
    // signup input values
    var getUserName = userNameInp.value;
    var password = passwordInp.value;
    var cnfrm_pass = cnfrm_passInp.value;
    var number = numberInp.value;
    var getEmail = emailInp.value;
    var getAddress = addressInp.value;
    var dateOfBirth = dateOfBirthInp.value;
    var postalCode = postalCodeInp.value;
    var profilePic = profilePicInp.value;
    var genderOptions = document.getElementsByName("r1");
    var selectedGender;
    // into lowercase
    getUserName = getUserName.toLowerCase();
    password = password.toLowerCase();
    cnfrm_pass = cnfrm_pass.toLowerCase();
    getEmail = getEmail.toLowerCase();
    getAddress = getAddress.toLowerCase();
    // filter extra spaces
    getUserName = getUserName.replace(/\s\s+/g, " ");
    getAddress = getAddress.replace(/\s\s+/g, " ");
    getEmail = getEmail.replace(/\s\s+/g, "");
    password = password.replace(/\s\s+/g, "");
    cnfrm_pass = cnfrm_pass.replace(/\s\s+/g, "");
    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var allClear = true;
    var empty = false;

    try{
        if(getUserName <1) {
            empty = true;
            throw userNameInp;
        }
        if(getUserName.length < 5){
            throw "Username requires at least 8 characters.";
        }
        if(getEmail <1) {
            empty = true;
            throw emailInp;
        }
        if(regex_pattern.test(getEmail)){
            getEmail = getEmail;
        }else{
            throw "Please enter email properly.";
        }
        if(password <1) {
            empty = true;
            throw passwordInp;
        }
        if(password.length < 8) {
            throw "Password requires at least 8 characters.";
        }
        if(password !== cnfrm_pass) {
            throw "Please enter same password in Confirm field.";
        }
        if(getAddress <1) {
            empty = true;
            throw addressInp;
        }
        if(getAddress.length < 15) {
            throw "Proper address required.";
        }
        if(number <1) {
            empty = true;
            throw numberInp;
        }
        if(number.length < 11 || number.length > 11) {
            throw "Please enter contact number of 11 characters.";
        }
        //check gender
        if (genderOptions[0].checked) {
            selectedGender = genderOptions[0].value;
        }
        else if (genderOptions[1].checked) {
            selectedGender = genderOptions[0].value;
            
        }else{
            throw "Please select the gender.";
        }
        if(dateOfBirth.length < 1) {
            throw "Date of Birth required.";
        }
        if(postalCode <1) {
            empty = true;
            throw postalCodeInp;
        }
        if(postalCode.length < 5 || postalCode.length > 5) {
            throw "Please enter 5 characters of postal code.";
        }
        if(profilePic.length < 1){
            throw "Please upload profile picture.";
        }
    }
    catch(error){
        if(empty === true){
            error.style.border = "3px solid red";
            error.style.color = "red";
            error.value = "This is empty, fill it!";
            setTimeout(function () {
            error.style.color = "black";
            error.style.border = "none";
                error.value = null;
            },900);
        }
        else{
            alert(error);
        };
        allClear = false;
    }
    if(allClear === true) {
         userInfo = {
            userName: getUserName,
            email: getEmail,
            password: cnfrm_pass,
            contactNumber: number,
            address: getAddress,
            gender: selectedGender,
            postalCode: postalCode,
            dateOfBirth: dateOfBirth,
            profileImg: profilePic
        };
        // through data to local storage
        var localStore = JSON.stringify(userInfo);
        window.localStorage.setItem("User info" , localStore);
        console.log(localStore);

        mainOfSignup.innerHTML = null;

        var blurrr = document.createElement("div");
        blurrr.setAttribute("id", "blur");
        mainOfSignup.appendChild(blurrr);

        var spinner = document.createElement("div");
        spinner.setAttribute("class", "spinner-border text-light");
        blurrr.appendChild(spinner);
        setTimeout(function () {
            mainOfSignup.style.display = "none";
            mainOfSignin.style.display = "flex";

        },2000);
        mainOfSignin.animate([    //animation
        { transform: 'translateX(0px)'},
        { transform: 'translateX(-1600px)'},
        { transition: '2s'}
        ],{
            duration: 3000
        });
    }
};
// sign in
var passwordInp2 = document.getElementById("password-inp2");
var emailInp2 = document.getElementById("email-inp2");
function signIn(event) {
    event.preventDefault();
    // get date from local storage
    getLocalData = window.localStorage.getItem("User info");
    dataIntoParse = JSON.parse(getLocalData);
    
    var password2 = passwordInp2.value;
    password2 = password2.replace(/\s\s+/g, "");
    var getEmail2 = emailInp2.value;
    getEmail2 = getEmail2.replace(/\s\s+/g, "");

    var allClear2 = true;
    var empty = false;
    try{
        if(getEmail2 < 1) {
            empty = true;
            throw emailInp2;
        }
        if(getEmail2 !== dataIntoParse.email){
            throw "Email not match!";
        }
        if(password2 < 1) {
            empty = true;
            throw passwordInp2;
        }
        if(password2 !== dataIntoParse.password) {
            throw "Incorrect Password.";
        }
    }
    catch(err){
        if(empty === true){
            err.style.border = "3px solid red";
            err.style.color = "red";
            err.value = "This is empty, fill it!";

            setTimeout(function () {
            err.style.color = "black";
            err.style.border = "none";
                err.value = null;
            },900);
        }
        else{
            alert(err);
        };

        allClear2 = false;
    };

    if(allClear2 === true) {
        mainCont.innerHTML = null;
        
        var blurrr = document.createElement("div");
        blurrr.setAttribute("id", "blur");
        mainCont.appendChild(blurrr);

        var spinner = document.createElement("div");
        spinner.setAttribute("class", "spinner-border text-light");
        blurrr.appendChild(spinner);
        setTimeout(function () {
            window.location.replace("./dashboard/dashboard.html");
        },2000);
    }
};
var dropdown = document.getElementById("dropdown");
function openMenu(){
    if(dropdown.style.display == "none") {
        dropdown.style.display = "flex";
    }
    else{
        dropdown.style.display = "none"
    }
}
var modalContainner = document.getElementById("modal-container");
var modalBody = document.getElementById("modal-body");
var getSpans = document.getElementsByClassName("info-property-value");

    // modalBody.style.backgroundImage = `url(${dataIntoParse.profileImg})`

    //open profile info modal
function profileModal() {
    var getLocalData = window.localStorage.getItem("User info");
    var dataIntoParse = JSON.parse(getLocalData);
    
    dropdown.style.display = "none";
    getSpans[0].textContent = dataIntoParse.userName;
    getSpans[1].textContent = dataIntoParse.email;
    getSpans[2].textContent = dataIntoParse.password;
    getSpans[3].textContent = dataIntoParse.contactNumber;
    getSpans[4].textContent = dataIntoParse.address;
    getSpans[5].textContent = dataIntoParse.gender;
    getSpans[6].textContent = dataIntoParse.postalCode;
    getSpans[7].textContent = dataIntoParse.dateOfBirth;
    modalContainner.style.display = "flex";
    modalBody.animate([    //animation
        { transform: 'translateY(-500px)'},
        { transform: 'translateY(0px)'}
        ],{
            duration: 500
        });
};
//modal close
function closeModal(event) {
    event.target.parentNode.parentNode.animate([    //animation
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-700px)'}
    ],{
        duration: 500
    });
    setTimeout(function () {
        event.target.parentNode.parentNode.parentNode.style.display = "none";
    },400)
};
// logout
function logOut() {
    window.localStorage.clear();
    window.location.replace("../index.html");
};

function projects(el) {
    dropdown.style.display = "none";

    var projContainer = document.getElementById(el)
    projContainer.style.display = "flex";
    projContainer.childNodes[1].animate([    //animation
        { transform: 'translateY(-500px)'},
        { transform: 'translateY(0px)'}
        ],{
            duration: 500
        });
}