import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";
import AddEmployeeHealthDataFormSection from "./add-employee-health-data-form-section";

export default function EmployeeMedTableSection() {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    // const { medicine_records } = useSelector((state) => state.medicine_records)
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
            title: "Complaint",
            dataIndex: "complaint",
            key: "complaint",
            ...getColumnSearchProps("complaint"),
        },
        {
            title: "Temperature",
            dataIndex: "temp",
            key: "temp",
            ...getColumnSearchProps("temp"),
        },
        {
            title: "Blood Pressure",
            dataIndex: "bp",
            key: "bp",
            ...getColumnSearchProps("bp"),
        },
        {
            title: "Sugar Level",
            dataIndex: "sugar",
            key: "sugar",
            ...getColumnSearchProps("sugar"),
        },
        {
            title: "Oxygen Level",
            dataIndex: "oxygen",
            key: "oxygen",
            ...getColumnSearchProps("oxygen"),
        },
        {
            title: "Injuries",
            dataIndex: "injury",
            key: "injury",
            ...getColumnSearchProps("injury"),
        },
        {
            title: "Recommendation",
            dataIndex: "recommend",
            key: "recommend",
            ...getColumnSearchProps("recommend"),
        },
        {
            title: "Medication Given",
            dataIndex: "med_give",
            key: "med_give",
            ...getColumnSearchProps("med_give"),
        },
        {
            title: "Date of Examine",
            dataIndex: "examdate",
            key: "examdate",
            ...getColumnSearchProps("examdate"),
        },
    ];

    return (
        <div>
            <div>
                <div className="flex items-center gap-x-3 mb-4">
                    <h2 className="text-lg font-medium text-gray-800">
                        <b> Employee Medical Records</b>
                    </h2>
                </div>
            </div>
            <AddEmployeeHealthDataFormSection/>
            <Table columns={columns} 
            // dataSource={medicine_records} 
            />;
        </div>
    );
}
