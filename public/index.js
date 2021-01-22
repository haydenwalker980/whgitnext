const NEXT_FAVICON = "favicon.next.png";
const DEFAULT_FAVICON = "favicon.default.png";

document.addEventListener("DOMContentLoaded", () => {
  // Fetch the cookie value
  if (document.cookie.indexOf("gitlab_canary=true") >= 0) {
    document.getElementById("next-switch").setAttribute("checked", true);
    setFavicon(NEXT_FAVICON);
  }

  document.getElementById("next-switch").addEventListener("change", () => {
    document.cookie = `gitlab_canary=${this.checked};domain=.gitlab.com;path=/;expires=${new Date(Date.now() + 31536000000).toUTCString()}`;
    const favicon = this.checked ? NEXT_FAVICON : DEFAULT_FAVICON;
    setFavicon(favicon);
  });
});

/**
 * Sets the favicon according to the received path
 *
 * @param String faviconPath
 */
function setFavicon(faviconPath) {
  const faviconEl = document.getElementById("favicon");
  if (faviconEl && faviconPath) {
    faviconEl.setAttribute("href", faviconPath);
  }
}
