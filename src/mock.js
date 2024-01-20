export const PRODUCTMOCK = {
  Status: 'OK',
  Product: {
    inserted_products: 10,
    name: 'Creatina',
    batch_id: 1,
    batch_name: 'Lote Max Creatina',
    company_id: 1,
    company_name: 'Max Titanium Suplementos LTDA',
  },
};

export const batchMock = {
  name: 'Lote Max Creatina',
  production_date: '2024-01-01T00:00:00',
  level: 2,
  status: true,
  notes: '',
  id: 1,
  quantity: 10,
  registration_date: '2024-01-12T13:58:17.058499',
  qrcode_settings: {
    version: 1,
    box_size: 5,
    border: 10,
  },
  company_id: 1,
};

export const companyMock = {
  id: 1,
  legal_name: '50.661.908 Luciana Cordeiro',
  address: 'Rua Sebastiao de Souza, 118 - Jardim Santa Esmeralda SP',
  phone_number: '(15) 99913-4811',
  trade_name: 'Max Titanium Suplementos LTDA',
  cnpj: '50.661.908/0001-14',
  contact_email: 'karenfabiana@gmail.com',
  website: 'https://www.maxtitanium.com.br/',
};
