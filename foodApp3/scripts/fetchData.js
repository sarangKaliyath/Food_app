
async function getItems(url){

    try {
        let res = await fetch(url);
        let data = await res.json();

        return data;

    }
    catch {
        console.log("My Error")
    }
}


function appendData(data, mainDiv) {
    
    mainDiv.innerHTML = null;

    
    data.meals.forEach(({ strMeal, strArea, strCategory, strMealThumb }) => {



        let div = document.createElement("div");

        let p_name = document.createElement("p");

        let p_region = document.createElement("p");

        let p_category = document.createElement("p");

        let img = document.createElement("img");

        p_name.innerHTML = strMeal;

        p_region.innerHTML = strArea;

        p_category.innerHTML = strCategory;

        img.src = strMealThumb;

        img.setAttribute("class", "imgWidth");


        div.append(img, p_name, p_region, p_category)

        div.style.fontSize = "18px";

        div.setAttribute("class", "border");
        
        mainDiv.append(div);

    })


}

async function searchBarContent(data,items) {

    items.innerHTML = null;

    items.style.display = "block";

    data.meals.forEach(({ strMeal }) => {

        let search_p = document.createElement("p");

        search_p.innerHTML = strMeal;

        items.append(search_p);

    })

}

export {getItems,appendData,searchBarContent}