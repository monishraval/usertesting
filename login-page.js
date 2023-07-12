
//Webengage
/*var webengage;!function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),
arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="feedback survey notification".split(z),c="options render clear abort".split(z),p="Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i < l.length;i++)o(r,[l[i]]);for(i=0;i < a.length;i++){for(r[a[i]]={},s=0;s < c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s < p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i < u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");webengage.init("311c522c");
*/
//login function
    const loginForm = document.getElementById("login-form");
    const loginErrorMsg = document.getElementById("login-error-msg");
    function signIn(){
      const username = loginForm.username.value;
      const password = loginForm.password.value;

      if ((username === "ankita" && password === "123") || (username=== "monish" && password === "123") || (username === "anku" && password === "123") || (username === "kunal" && password === "123")) {
        webengage.user.login(username);

        //Webengage Identification
        if(username == "ankita"){
          webengage.user.setAttribute('we_email', 'gankita009@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Ankita');
          webengage.user.setAttribute('we_last_name', 'Gupta');
          webengage.user.setAttribute('we_phone', '+919619903182');
          webengage.user.setAttribute('Date of Birth', '15-10-1996');
          webengage.user.setAttribute('we_gender', 'female');
          webengage.user.setAttribute("age_web", 26);
        }else if(username == "anku"){
          webengage.user.setAttribute('we_email', 'ankita.gupta@webengage.com');
          webengage.user.setAttribute('we_first_name', 'Anku');
          webengage.user.setAttribute('we_last_name', 'Gupta');
          webengage.user.setAttribute('we_phone', '9619903182');
          webengage.user.setAttribute('Date of Birth', '15-10-1996');
          webengage.user.setAttribute('we_gender', 'female');
          webengage.user.setAttribute("age_web", 26);
        }else if(username == "kunal"){
          webengage.user.setAttribute('we_email', 'kunal.prasad@webengage.com');
          webengage.user.setAttribute('we_first_name', 'Kunal');
          webengage.user.setAttribute('we_last_name', 'Prasad');
        }else if(username == "monish"){
          webengage.user.setAttribute('we_email', 'monishraval@gmail.com');
          webengage.user.setAttribute('we_first_name', 'Monish');
          webengage.user.setAttribute('we_last_name', 'Raval');
          webengage.user.setAttribute('we_phone', '+918452873068');
          webengage.user.setAttribute('Date of Birth', '08-06-2000');
          webengage.user.setAttribute('we_gender', 'male');
          webengage.user.setAttribute("age_web", 23);
        }
      alert("You have successfully logged in.");
      window.location.href="signin.html";
      webengage.track('MainPageView', {
        'isClicked' : true
    });
      sessionStorage.setItem('loggedIn', true);
      }else {
          loginErrorMsg.style.opacity = 1;
        }
  }

//feedback function
function feedback(){
  document.getElementById("feedback").innerHTML = "Feedback Button is Clicked";
  webengage.track('Feedback Button clicked', {
    'isClicked' : true
});
}

//Zero button click function
function zero(){
  document.getElementById("number").innerHTML = "0";
  webengage.track('zeroBtnClicked', {
    'isClicked' : true
});
}

//One button click function
function one(){
  document.getElementById("number").innerHTML = "1";
  webengage.track('oneBtnClicked', {
    'isClicked' : true
});
}

//Payment made button click function
function paymentButton(){
  const amount = document.getElementById("payment").value;
  if (amount == " " || amount == ""){
    alert("Please enter amount")
  }else{
  document.getElementById("test").innerHTML = "You had made a payment of " + amount ;
  webengage.track('Payment Made', {
    'Amount' : parseFloat(amount)
});
  }
}

//About page navigation button click function
function about(){
  webengage.track('AboutPageView', {
    'isClicked' : true
});
}

//Contact page navigation button click function
function contact(){
  webengage.track('ContactPageView', {
    'isClicked' : true
});
}

//logout function
function logout(){
    document.getElementById("logout").addEventListener("click", a);
    function a(){
        alert("You have successfully logged out.");
        window.location.href="index.html"
        webengage.user.logout();
    }
}

//Go to home button click function
function newpage(){
  window.location.href="signin.html"
  webengage.track('GoToHome', {
    'isClicked' : true
});
}

