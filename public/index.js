document.addEventListener("DOMContentLoaded", function() {
  // Fetch the cookie value
  if (document.cookie.indexOf('gitlab_canary=true') >= 0) {
    document.querySelector("#next-switch").setAttribute("checked", true);
  }

  document.querySelector("#next-switch").addEventListener('change', function () {
    document.cookie = "gitlab_canary="+ this.checked +";domain=.gitlab.com;path=/;expires=" + new Date(Date.now() + 31536000000).toUTCString();
  });
});
