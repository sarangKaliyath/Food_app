
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


function appendData(data, mainDiv,items) {
    
    mainDiv.innerHTML = null;
    items.innerHTML = null;

    items.style.display = "block";
    
    data.meals.forEach(({ strMeal, strArea, strCategory, strMealThumb }) => {

        let div = document.createElement("div");

        let search_p = document.createElement("p");

        let p_name = document.createElement("p");

        let p_region = document.createElement("p");

        let p_category = document.createElement("p");

        let img = document.createElement("img");

        p_name.innerHTML = strMeal;

        search_p.innerHTML = strMeal;



        items.append(search_p);

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

export {getItems,appendData}