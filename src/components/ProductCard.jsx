import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      title={product.product_name || 'No Name'}
      bodyStyle={{
        height: '300px',
        width: '200px',
      }}
      onClick={() => navigate(`/product/${product.code}`)}
    >
      <img
        src={product.image_url}
        alt={product.product_name}
        style={{
          maxHeight: '100%',
          maxWidth: '100%',
        }}
      />
    </Card>
  );
}
