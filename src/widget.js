  function Bar(data) {

    // get values
    this.message = data.message;
    this.position = data.position;
    
    // handles
    const barButton = document.querySelector(".show-bar");
    const bar = document.querySelector('.bar');
    const barExit = document.getElementById("bar-exit");
    const text = document.getElementById('bar-text');
    const btnGet = document.querySelector(".bar-info button");
    const btnArt = document.getElementById("bar-alert");
    const btnArtClose = document.getElementById("bar-alert-close");
    
    //set message and bar's position
    text.innerHTML = this.message;
    this.position === "top" ? bar.style.top = "0" : bar.style.bottom = "0";

    // listeners
    barButton.addEventListener("click",handleShowBar,false);
    barExit.addEventListener("click",handleHideBar,false);
    btnGet.addEventListener("click",handleGetWidget,false);
    btnArtClose.addEventListener("click",handleArtClose,false);

    //set bar - slide down
    function handleShowBar(e) { 
      e.preventDefault();
      if (e.target.nextElementSibling.offsetHeight === 0)
        bar.classList.toggle('slide');
    }

    //hide bar - slide up
    function handleHideBar(e) {
      e.preventDefault();
      bar.classList.toggle('slide');
    }

    //
    function handleGetWidget(e) {
      e.preventDefault();
      btnArt.style.display = "block";
    }

    function handleArtClose(e) {
      e.preventDefault();
      btnArt.style.display = "none";
    }

  }