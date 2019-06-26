  function Bar(data) {

    // get values
    this.message = data.message;
    this.position = data.position;
    
    // handles
    const barButton = document.querySelector(".show-bar");
    const bar = document.querySelector('.bar');
    const barExit = document.getElementById("bar-exit");
    const text = document.getElementById('bar-text');
    
    //set message and bar's position
    text.innerHTML = this.message;
    this.position === "top" ? bar.style.top = "0" : bar.style.bottom = "0";

    // listeners
    barButton.addEventListener("click",handleShowBar,false);
    barExit.addEventListener("click",handleHideBar,false);

    //set bar
    function handleShowBar(e) { 
      e.preventDefault();
      if (bar.style.display === "none" || bar.style.display == "")
        bar.style.display = "block";
    }

    //hide bar
    function handleHideBar(e) {
      e.preventDefault();
      bar.style.display = "none";
    }

  }