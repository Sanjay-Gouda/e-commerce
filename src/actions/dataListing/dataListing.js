

export const dataListing = async()=>{

    const url = "https://fakestoreapi.com/products"
    const response = await fetch(url);
    const jsonData =  await response.json();

    return jsonData



}