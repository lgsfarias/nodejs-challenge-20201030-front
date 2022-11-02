import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Image, Col, Row, Space, Descriptions, Layout, Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import api from '../services/api';
import LoadingPage from '../components/LoadingPage';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function ProductPage() {
  const [product, setProduct] = useState({});
  const { code } = useParams();
  const navigate = useNavigate();

  async function fetchProduct() {
    try {
      const response = await api.get(`/products/${code}`);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      await fetchProduct();
    })();
  }, []);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Title
          level={3}
          style={{
            color: 'white',
          }}
        >
          {product.product_name}
        </Title>
        <HomeOutlined
          onClick={() => navigate('/')}
          style={{
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        />
      </Header>
      <Content style={{ padding: '20px' }}>
        {product.product_name ? (
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Image
                  src={product.image_url}
                  alt={product.product_name}
                  width={400}
                  style={{
                    maxWidth: 'calc(100vw - 40px)',
                  }}
                />
              </Col>
              <Col span={24}>
                <Descriptions title="Product Info" bordered>
                  <Descriptions.Item label="Code">
                    {product.code}
                  </Descriptions.Item>
                  <Descriptions.Item label="Name">
                    {product.product_name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Creator">
                    {product.creator}
                  </Descriptions.Item>
                  <Descriptions.Item label="Created">
                    {product.created_t}
                  </Descriptions.Item>
                  <Descriptions.Item label="Last Modified">
                    {product.last_modified_t}
                  </Descriptions.Item>
                  <Descriptions.Item label="Quantity">
                    {product.quantity}
                  </Descriptions.Item>
                  <Descriptions.Item label="Brands">
                    {product.brands}
                  </Descriptions.Item>
                  <Descriptions.Item label="Categories">
                    {product.categories}
                  </Descriptions.Item>
                  <Descriptions.Item label="Labels">
                    {product.labels}
                  </Descriptions.Item>
                  <Descriptions.Item label="Cities">
                    {product.cities}
                  </Descriptions.Item>
                  <Descriptions.Item label="Purchase Places">
                    {product.purchase_places}
                  </Descriptions.Item>
                  <Descriptions.Item label="Stores">
                    {product.stores}
                  </Descriptions.Item>
                  <Descriptions.Item label="Ingredients">
                    {product.ingredients_text}
                  </Descriptions.Item>
                  <Descriptions.Item label="Traces">
                    {product.traces}
                  </Descriptions.Item>
                  <Descriptions.Item label="Serving Size">
                    {product.serving_size}
                  </Descriptions.Item>
                  <Descriptions.Item label="Serving Quantity">
                    {product.serving_quantity}
                  </Descriptions.Item>
                  <Descriptions.Item label="Nutriscore Score">
                    {product.nutriscore_score}
                  </Descriptions.Item>
                  <Descriptions.Item label="Nutriscore Grade">
                    {product.nutriscore_grade}
                  </Descriptions.Item>
                  <Descriptions.Item label="Main Category">
                    {product.main_category}
                  </Descriptions.Item>
                  <Descriptions.Item label="Imported">
                    {new Date(product.imported_t).toLocaleString()}
                  </Descriptions.Item>
                  <Descriptions.Item label="OpenFoodFactsSite">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: 'blue',
                      }}
                    >
                      Oficial Site
                    </a>
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Space>
        ) : (
          <LoadingPage />
        )}
      </Content>
      <Footer>
        <Title level={5}>©2022 Created by lgsfarias</Title>
      </Footer>
    </Layout>
  );
}
