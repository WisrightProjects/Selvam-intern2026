var recipecontainer = document.getElementById("recipe")
var search = document.getElementById("search")
var recipelist = recipecontainer.querySelectorAll("div")


search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < recipelist.length; count = count + 1) {
        var recipename = recipelist[count].querySelector("P").textContent

        if (recipename.toUpperCase().indexOf(enteredvalue) < 0) {
            recipelist[count].style.display = "none"
        }
        else {
            recipelist[count].style.display = "block"
        }
    }
})
var sidenavbar = document.querySelector(".side-navbar")

function showNavbar() {
    sidenavbar.style.left = "0"
}

function closeNavbar() {
    sidenavbar.style.left = "-60%"
}



























