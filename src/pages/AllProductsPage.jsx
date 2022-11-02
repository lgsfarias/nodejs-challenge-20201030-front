import { useEffect, useState } from 'react';
import { Pagination, Layout, Typography, Space } from 'antd';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingPage from '../components/LoadingPage';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(1);

  async function onChange(current, pageSize) {
    fetchProducts(current - 1, pageSize);
  }

  async function fetchProducts(page, limit) {
    try {
      const response = await api.get(`/products?page=${page}&limit=${limit}`);
      setProducts(response.data.products);
      setTotalProducts(response.data.total);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      await fetchProducts(0, 10);
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
          All Products
        </Title>
      </Header>
      <Content
        style={{
          padding: '0 20px',
        }}
      >
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
        >
          {products.length ? (
            <>
              <Space wrap>
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </Space>
              <Pagination
                onChange={onChange}
                defaultCurrent={1}
                total={totalProducts}
              />
            </>
          ) : (
            <LoadingPage />
          )}
        </Space>
      </Content>
      <Footer>
        <Title level={5}>©2022 Created by lgsfarias</Title>
      </Footer>
    </Layout>
  );
}
