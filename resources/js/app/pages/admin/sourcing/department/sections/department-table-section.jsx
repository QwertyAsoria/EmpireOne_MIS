import React from "react";
import { Space, Table, Tag, Tooltip } from "antd";
import { useSelector } from "react-redux";
import DepartmentDeleteSection from "./department-delete-section";
import DepartmentUpdateSection from "./department-update-section";

const DepartmentTableSection = () => {
    const { departments } = useSelector((store) => store.departments);
    const data = departments?.map((res) => ({
        dept: res?.dept,
        depthead: `${res?.user?.employee_fname ?? ''} ${res?.user?.employee_lname ?? ''}`, // concatenate first and last names
        action: res,
    }));


    console.log('departments', departments)

    const columns = [
        {
            title: "Departments",
            dataIndex: "dept",
            key: "dept",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Department Head",
            dataIndex: "depthead",
            key: "depthead",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_record) => {
                return (
                    <div className="flex flex-1 gap-1.5">
                        <div>
                            <Tooltip title="Update Department">
                                <div>
                                    <DepartmentUpdateSection data={_record} />
                                </div>
                            </Tooltip>
                        </div>
                        <div>
                            <Tooltip title="Delete Department">
                                <div>
                                    <DepartmentDeleteSection data={_record} />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                );
            },
        },
    ];
    return <Table columns={columns} dataSource={data} />;
};
export default DepartmentTableSection;
