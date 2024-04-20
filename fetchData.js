
const fetchData = async () => {
    const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448')
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
    console.log(response);
    return response;
}

export default fetchData;