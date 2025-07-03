import  { useState } from 'react';
import { useTaskStats } from '../../../hooks/useTaskStats';
import styled from 'styled-components';
import { Badge, Button, Calendar as AntCalendar, Modal, Tooltip } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

// Styled components
const CalendarContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TaskItem = styled.li`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TaskTitle = styled.span`
  font-weight: 500;
`;

const TaskStatus = styled.span<{ status: string }>`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${props => 
    props.status === 'Complete' 
      ? '#e6f7e6' 
      : props.status === 'In Progress' 
        ? '#fff7e6' 
        : '#f9f0ff'};
  color: ${props => 
    props.status === 'Complete' 
      ? '#52c41a' 
      : props.status === 'In Progress' 
        ? '#fa8c16' 
        : '#722ed1'};
`;

function Calendar() {
  const { statistics, isLoading, error } = useTaskStats();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'month' | 'year'>('month');

  // Handle date selection
  const onSelect = (date: Dayjs) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  // Get tasks for a specific date
  const getTasksForDate = (date: Dayjs) => {
    if (!statistics || !statistics.tasks) return [];
    
    return statistics.tasks.filter(task => {
      return dayjs(task.date).format('YYYY-MM-DD') === date.format('YYYY-MM-DD');
    });
  };

  // Render calendar cell content
  const dateCellRender = (date: Dayjs) => {
    const tasksForDate = getTasksForDate(date);
    
    if (tasksForDate.length === 0) return null;
    
    return (
      <div className="tasks">
        {tasksForDate.map(task => {
          let badgeColor = '#597ef7'; // default
          if (task.status === 'Complete') badgeColor = '#52c41a';
          else if (task.status === 'In Progress') badgeColor = '#fa8c16';
          else if (task.status === 'Pending') badgeColor = '#722ed1';
          
          return (
            <Tooltip title={task.title} key={task.id}>
              <Badge color={badgeColor} text={task.title} />
            </Tooltip>
          );
        })}
      </div>
    );
  };

  // Handle view change (month/year)
  const onViewChange = (view: 'month' | 'year') => {
    setCurrentView(view);
  };

  if (isLoading) return <div>Loading calendar...</div>;
  if (error) return <div>Error loading calendar data</div>;

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Title>Task Calendar</Title>
        <div>
          <Button 
            type={currentView === 'month' ? 'primary' : 'default'} 
            onClick={() => onViewChange('month')}
            style={{ marginRight: 8 }}
          >
            Month
          </Button>
          <Button 
            type={currentView === 'year' ? 'primary' : 'default'} 
            onClick={() => onViewChange('year')}
          >
            Year
          </Button>
        </div>
      </CalendarHeader>

      <AntCalendar 
        cellRender={dateCellRender} 
        onSelect={onSelect}
        mode={currentView}
      />

      <Modal
        title={selectedDate ? `Tasks for ${selectedDate.format('MMMM D, YYYY')}` : 'Tasks'}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        ]}
      >
        {selectedDate && (
          <TaskList>
            {getTasksForDate(selectedDate).length > 0 ? (
              getTasksForDate(selectedDate).map(task => (
                <TaskItem key={task.id}>
                  <TaskTitle>{task.title}</TaskTitle>
                  <TaskStatus status={task.status}>{task.status}</TaskStatus>
                </TaskItem>
              ))
            ) : (
              <p>No tasks for this date.</p>
            )}
          </TaskList>
        )}
      </Modal>
    </CalendarContainer>
  );
}

export default Calendar;