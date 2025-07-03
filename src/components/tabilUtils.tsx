
import { Tag } from "antd";
import { Link } from "react-router-dom";




const tabilUtils = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "default";
        if (status === "Complete") color = "success";
        else if (status === "Pending") color = "warning";
        else if (status === "In Progress") color = "processing";

        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (id: number) =>(
         <Link to={`view/${id}`}>View</Link>
      )
    }
  ];
  return {
    columns,
  };
};

export default tabilUtils;
