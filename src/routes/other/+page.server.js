export async function load({fetch}){
    
    const BASE_URL = `https://api.thecatapi.com/v1`
    const API_KEY = `live_yBWH0otnDLXMNNVIjdb7j6vV0F5tMFOUcbbOJ4mNDcKWnOdscPe99331duAJQ4kL`
    const CAT_IDS = [`beng`, `birm`, `bomb`, `drex`, `mcoo`, `norw`, `rblu`, `tang`]
    // https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=live_yBWH0otnDLXMNNVIjdb7j6vV0F5tMFOUcbbOJ4mNDcKWnOdscPe99331duAJQ4kL
    let cats = [];
    
    CAT_IDS.forEach(async id => {
        // let cats [] = cats;
        let res = await fetch(`${BASE_URL}/images/search?limit=5&breed_ids=${id}&api_key=${API_KEY}`); 
        let data = await res.json();
        // console.log(data);
        let obj = {
            urls: [],
            id: `id here`,
            breed: `breed here`,
        };
        data.forEach(i => {
            obj.urls.push(i.url);
            obj.breed = i.breeds[0].name;   
            obj.id = id;
        });
        cats.push(obj);
        console.log(obj);
    });
    
    console.log(cats)
    
    return {cats};
}