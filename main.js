window.onload = function() {
  const path = window.location.pathname.split("/");
  switch(path[1]) {
    case "": {
      loadPage("dashboard");
      break;
    }
    case "": {
      loadPage("posts");
      break;
    }
    case "": {
      loadPage("photos");
      break;
    }
    default: {
      loadPage("404")
      break;
    }
  }

  document.querySelectorAll(".menu__item").forEach((item) => {
    item.addEventListener("click", function() {
      const path = item.getAttribute("value");
      loadPage(path);
      if(path === "") {
        window.history.pushState("", "", "/");
        return;
      }

      window.history.pushState("", "", path);
    });
  });

  function loadPage($path) {
    if($path == "") return;
    
    const container = document.getElementById("container");

    const request = new XMLHttpRequest();
    request.open("GET", "pages/" + $path + ".html");
    request.send();
    request.onload = function() {
      if(request.status === 200) {
        container.innerHTML = request.responseText;
        document.title = $path;
      }
    }
  }
}