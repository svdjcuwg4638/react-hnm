function getProducts(searchQuery){
  return async (dispatch, getState)=>{
    let url = ` https://my-json-server.typicode.com/svdjcuwg4638/react-hnm/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
  }
}

function getProductDetail(id){
  return async(dispatch,getState)=>{
    let url = `https://my-json-server.typicode.com/svdjcuwg4638/react-hnm/products/${id}`
    let resopnse = await fetch(url);
    let data = await resopnse.json();
    dispatch({type:"GET_PRODUCT_DETAIL",payload:{data}})
  }
}


export const productAction = {getProducts,getProductDetail}