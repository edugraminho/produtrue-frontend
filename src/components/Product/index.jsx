import React from 'react';

function Product({product}) {

//   {
//     "name": "Whey",
//     "id": 41,
//     "description": "Whey description",
//     "price": 101.99,
//     "manufacturing_date": "2022-01-01T00:00:00",
//     "certification": "Product certification",
//     "batch_id": 5,
//     "token": "LYVXmhpt26fvnHU9h2cILoY5AruINQ",
//     "status": true,
//     "url_route": "http://localhost/max-titanium-suplementos-ltda/whey/LYVXmhpt26fvnHU9h2cILoY5AruINQ",
//     "stock_quantity": 100,
//     "expiration_date": "2030-12-31T00:00:00",
//     "company_id": 1
// }
  return (
    <div className="product-details">
      {product ? (
        <>
          <h2>{product.name}</h2>
          {/* <img src={product.qrcodeImage} alt={`QR Code for ${product.name}`} /> */}
          <p>{product.description}</p>
          <p>Preço: R$ {product.price}</p>
          <p>Quantidade em estoque: {product.stock_quantity}</p>
          {/* Adicione mais informações conforme necessário */}
        </>
      ) : (
        <p>Carregando detalhes do produto...</p>
      )}
    </div>
  );
}

export default Product;
