
function setColor(x) {
    var html = document.getElementsByTagName('html')[0];
    if (x === 0) {
        html.style.cssText = "--color: #19F737";
    } else if (x === 1) {
        html.style.cssText = "--color:#f7b600";
    } else if (x === 2) {
        html.style.cssText = "--color:#1447FA";
    } else if (x === 3) {
        html.style.cssText = "--color:#F70C49";
    }
}