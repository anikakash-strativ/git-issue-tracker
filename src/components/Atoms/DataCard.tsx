import { Card } from 'antd';

interface DataCardProps {
  title: string;
  value: number;
  loading?: boolean;
}

const DataCard = ({ 
  title, 
  value, 
  loading = false 
}: DataCardProps) => {
  return (
    <Card 
      loading={loading} 
      style={{ 
        textAlign: 'left',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
    
      
      <div style={{ 
        fontSize: '14px', 
        color: '#666', 
        marginBottom: '8px',
        fontWeight: '500'
      }}>
        {title}
      </div>
      
      <div style={{ 
        fontSize: '2rem', 
        fontWeight: '600', 
        color: '#262626',
        lineHeight: '1'
      }}>
        {value}
      </div>
    </Card>
  );
};

export default DataCard;