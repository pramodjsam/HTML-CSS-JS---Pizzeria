function isAlreadySignedIn() {
  const isSignedIn = JSON.parse(localStorage.getItem("signedIn"));
  if (isSignedIn) {
    window.location.href = "../index.html";
  }
}

function isNotSignedIn(route = "") {
  const isSignedIn = JSON.parse(localStorage.getItem("signedIn"));
  if (!isSignedIn) {
    window.location.href = route ? route : "../index.html";
  }
}
