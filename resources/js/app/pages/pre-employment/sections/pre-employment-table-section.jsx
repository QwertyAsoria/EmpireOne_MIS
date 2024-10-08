import React, { useRef, useState } from "react";
import { CheckCircleFilled, CheckCircleOutlined, CheckSquareOutlined, LineOutlined, SearchOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Space, Table, Tag, Upload } from "antd";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import moment from "moment";
import ReUploadRequirementsSection from "./re-upload-requirements-section";

export default function PreEmploymentTableSection() {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    // const { job_positions } = useSelector((state) => state.job_positions)
    const { preemploymentfiles } = useSelector((state) => state.preemploymentfiles)
    const { applicant } = useSelector((state) => state.final_rate);


    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    // const data = [
    //     {
    //         key: '1',
    //         reqs: 'Birth Certificate',
    //         status: 'Approved',
    //     },
    //     {
    //         key: '2',
    //         reqs: 'Police Clearance',
    //         status: 'Declined',
    //     },
    //     {
    //         key: '3',
    //         reqs: 'Drug Test',
    //         status: 'Uploaded',
    //     },
    //     {
    //         key: '4',
    //         reqs: 'NBI Clearance',
    //         status: 'Approved',
    //     },
    // ];


    const columns = [
        {
            title: "App ID",
            dataIndex: "app_id",
            key: "app_id",
            ...getColumnSearchProps("app_id"),
        },
        {
            title: "Requirements",
            dataIndex: "reqs",
            key: "reqs",
            ...getColumnSearchProps("reqs"),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (_, record, i) => {
                console.log('record', record);

                const statusText = record.status === 'Declined'
                    ? `${record.status} - ${record.reas}`
                    : record.status;

                return (
                    <Tag
                        color={
                            record.status === 'Approved' ? 'green' :
                                record.status === 'Uploaded' ? 'orange' :
                                    record.status === 'Declined' ? 'red' :
                                        record.status === 'In Review' ? 'blue' :
                                            'blue'
                        }
                        key={i}
                    >
                        {statusText}
                    </Tag>
                );
            }
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => {

                return (
                    <div className='flex gap-1'>
                        {record.status === 'Approved' && (
                            <div className="text-green-500">
                                <CheckCircleOutlined className="text-2xl ml-2.5" />
                            </div>
                        )}
                        {record.status === 'Declined' && (
                            <ReUploadRequirementsSection data={record} />
                        )}
                        {record.status === 'Uploaded' && (
                            <div className='ml-2.5 text-2xl text-orange-500'>
                                <CheckSquareOutlined />
                            </div>
                        )}

                    </div>
                )
            }
        },
    ];
    console.log('applicant', applicant)
    return (
        <div className="mt-2">
            <Table columns={columns} dataSource={applicant?.requirements ?? []} />;
        </div>
    );
}
