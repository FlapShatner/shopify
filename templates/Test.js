document.addEventListener('DOMContentLoaded', function () {
  var targetNode = document.querySelector('.header__menus') // Parent node to observe
  var config = { attributes: true, childList: true, subtree: true }

  var callback = function (mutationsList, observer) {
    for (var mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        var childList = mutation.target.querySelector('.child-list')
        if (childList && getComputedStyle(childList).visibility === 'visible') {
          var rect = childList.getBoundingClientRect()
          console.log('Child List Coordinates: ', rect)
        }
      }
    }
  }

  var observer = new MutationObserver(callback)

  observer.observe(targetNode, config)
})

var parents = document.querySelectorAll(".drop-link")
var childList = document.querySelector(".child-list")
parents.forEach(element => {
    element.addEventListener("mouseenter", (event) => {
        event.target.children.forEach(child => {
            console.log(child.classList)
        })
    })
});