
const ShoeCatalogue_api = function() {

    const getStocks = function() {
        axios.get('/api/shoes');
    }
  
  
  
    const addToCart = function (id)  {
        axios.post(`api/shoes/cart/${id}`);
    }
  
    const viewCart = function (){
        axios.get('/api/view_cart');
    }
  
    const addNewStock = function (brand, color, shoeSize, price, quantity)  {
      return axios.post('/api/shoes', {
        brand,
        color,
        shoeSize,
        price,
        quantity
      });
    }
    
  
    return {
      viewStocks: getStocks,
      addToShoppingCart: addToCart,
      viewShopping: viewCart,
      addNewStock,
      
    }
  }