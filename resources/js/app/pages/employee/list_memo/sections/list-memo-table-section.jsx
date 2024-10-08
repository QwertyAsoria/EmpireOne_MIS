import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Badge, Button, Input, Space, Table, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import moment from "moment";

export default function ListMemoTableSection() {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const { emp_memos } = useSelector((state) => state.emp_memos)
    console.log('emp_memos', emp_memos)

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

    const columns = [
        {
            title: "Memo Title",
            dataIndex: "memo_title",
            key: "memo_title",
            ...getColumnSearchProps("memo_title"),
        },
        {
            title: "Date",
            dataIndex: "created",
            key: "created",
            ...getColumnSearchProps("created"),
            render: (_, record) => {
                return (
                    <div className="gap-1.5 flex">
                        {moment(record.created).format('LLL')}
                    </div>
                );
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => {
                return (
                    <button>
                        View Memo
                    </button>
                    // <ButtonComponents />
                );
            },
        },
    ];

    const data = [
        {
            key: '1',
            memo_title: 'Q1 Financial Report',
            created: '2024-09-01T10:30:00Z',
            action: 'View Memo',
        },
        {
            key: '2',
            memo_title: 'Employee Benefits Update',
            created: '2024-08-25T14:00:00Z',
            action: 'View Memo',
        },
        {
            key: '3',
            memo_title: (
                <>
                    New Office Guidelines
                    <Badge count="New" style={{ backgroundColor: '#52c41a', marginLeft: '8px' }} />
                </>
            ),
            created: '2024-08-20T09:15:00Z',
            action: 'View Memo',
        },
        {
            key: '4',
            memo_title: 'Project X Launch',
            created: '2024-09-03T11:45:00Z',
            action: 'View Memo',
        },
        {
            key: '5',
            memo_title: (
                <>
                    Holiday Schedule 2024 <Badge count="New" style={{ backgroundColor: '#52c41a', marginLeft: '8px' }} />
                </>
            ),
            created: '2024-08-30T08:30:00Z',
            action: 'View Memo',
        },
    ];


    return (
        <div>
            <div>
                <div className="flex items-center gap-x-3 mb-4">
                    <h2 className="text-lg font-medium text-gray-800">
                        <b>Memo Lists Table</b>
                    </h2>
                </div>
            </div>
            <Table columns={columns} dataSource={data} />;
        </div>
    );

}
