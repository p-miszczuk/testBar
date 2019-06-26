  function Bar(data) {
    
    // handles
    const barButton = document.querySelector(".show-bar");
    const bar = document.querySelector('.bar');
    const barExit = document.getElementById("bar-exit");
    const text = document.getElementById('bar-text');

    // listeners
    barButton.addEventListener("click",handleShowBar,false);
    barExit.addEventListener("click",handleHideBar,false);

  }


