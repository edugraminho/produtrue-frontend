// {
// 	"name": "Whey",
// 	"id": 41,
// 	"description": "Whey description",
// 	"price": 101.99,
// 	"manufacturing_date": "2022-01-01T00:00:00",
// 	"certification": "Product certification",
// 	"batch_id": 5,
// 	"token": "LYVXmhpt26fvnHU9h2cILoY5AruINQ",
// 	"status": true,
// 	"url_route": "http://localhost/max-titanium-suplementos-ltda/whey/LYVXmhpt26fvnHU9h2cILoY5AruINQ",
// 	"stock_quantity": 100,
// 	"expiration_date": "2030-12-31T00:00:00",
// 	"company_id": 1,
// 	"company_name": "Max Titanium Suplementos LTDA",
// 	"company_website": "https://www.maxtitanium.com.br/"
// }
import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  /* background-color: #acacac; */
  /* border: 1px solid #ccc; */
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
  font-size: 1.2em;
  margin: 0;
  /* @media (max-width: 768px) {
  } */
`;

const ProdName = styled.h2`
  color: #e7e7e7;
  font-size: 1.8em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.7em;
  }
`;

const CompanyName = styled.p`
  color: #e7e7e7;

  font-size: 0.9em;
  text-align: left;
`;

const ItemContainer = styled.div`
  background-color: #2e2e2e63;
  padding: 10px;
  margin: 40px 0 20px 0;
  border-radius: 0.8rem;
  box-shadow:
    1px 2px 5px 0 rgba(0, 0, 0, 0.178),
    1px 2px 4px 0 rgba(0, 0, 0, 0.247);
`;

const LeftContent = styled.p`
  color: #979797;
  margin: 10px 0 10px 0;
  font-size: 0.7em;
  text-align: left;
`;

const RightContent = styled.p`
  color: #e7e7e7;
  margin: 10px 0 30px 0;
  padding-left: 10px;
  font-size: 1em;
  text-align: left;
`;

const WebsiteLink = styled.a`
  /* display: block; */
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  font-size: 0.9em;
`;

function Product({ product }) {
  console.log(product.expiration_date);
  return (
    <ProductContainer className="product-details">
      {product ? (
        <>
          <ProdName>{product.name}</ProdName>
          <CompanyName>{product.company_name}</CompanyName>

          <ItemContainer>
            <LeftContent>Descrição:</LeftContent>
            <RightContent>{product.description}</RightContent>

            <LeftContent>Preço:</LeftContent>
            <RightContent>R$ {product.price}</RightContent>

            <LeftContent>Validade:</LeftContent>
            <RightContent>31/12/2030</RightContent>

            <LeftContent>Certificação:</LeftContent>
            <RightContent>{product.certification}</RightContent>
            <WebsiteLink
              href={product.company_website}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              {product.company_website}
            </WebsiteLink>
          </ItemContainer>
        </>
      ) : (
        <p>Carregando detalhes do produto...</p>
      )}
    </ProductContainer>
  );
}

export default Product;
