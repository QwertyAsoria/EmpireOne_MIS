import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag } from "antd";
import Highlighter from "react-highlight-words";
import ButtonComponents from "../components/button-components";
import ApplicantsDropdownFilterComponents from "../components/applicants-dropdown-filter-components";
import { useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";
import { router } from "@inertiajs/react";
import AddApplicantsSection from "./add-applicants-section";
import ApplicantMenuSection from "./applicant-menu-section";
import ApplicantSearchSection from "./applicant-search-section";

export default function ApplicantsTableSection() {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    // const [filteredDatas, setFilteredDatas] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const { applicants, interviewer } = useSelector(
        (state) => state.applicants
    );

    const filteredDatas = applicants.data;
    // const filterDatas = (selectedStats) => {
    //     if (selectedStats.length === 0) {
    //         setFilteredDatas(applicants);
    //     } else {
    //         const filtered = applicants.filter(record => selectedStats.includes(record.status));
    //         setFilteredDatas(filtered);
    //     }
    // };

    useEffect(() => {
        // const storedDatas = localStorage.getItem('filteredDatas');
        // if (storedDatas) {
        //     setFilteredDatas(JSON.parse(storedDatas));
        // } else {
        //     filterDatas([]);
        // }
    }, []);

    useEffect(() => {
        // localStorage.setItem('filteredDatas', JSON.stringify(filteredDatas));
        // localStorage.clear()
        // setFilteredDatas(applicants);
    }, [applicants]);
    console.log("filteredDatas", filteredDatas);
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        // confirm();
        // setSearchText(selectedKeys[0]);
        // setSearchedColumn(dataIndex);
        console.log("waaa", selectedKeys, dataIndex);
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
            title: "Application #",
            dataIndex: "app_id",
            key: "emp_id",
            // ...getColumnSearchProps("emp_id"),
        },
        {
            title: "Fullname",
            dataIndex: "fullname",
            key: "fullname",
            // ...getColumnSearchProps("fullname"),
            render: (_, record, i) => {
                console.log("record", record);

                return (
                    <div key={i}>
                        {record.lname}, {record.fname}
                    </div>
                );
            },
        },
        {
            title: "Date of Birth",
            dataIndex: "dob",
            key: "dob",
            // ...getColumnSearchProps("dob"),
            render: (_, record) => {
                return (
                    <div className="gap-1.5 flex">
                        {moment(record.dob).format("LL")}
                    </div>
                );
            },
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
            // ...getColumnSearchProps("gender"),
        },
        {
            title: "Marital Status",
            dataIndex: "marital",
            key: "mstatus",
            // ...getColumnSearchProps("mstatus"),
        },
        {
            title: "Email Address",
            dataIndex: "email",
            key: "eogs",
            // ...getColumnSearchProps("eogs"),
        },
        {
            title: "Contact",
            dataIndex: "phone",
            key: "contact",
            // ...getColumnSearchProps("contact"),
        },
        {
            title: "Date Submitted",
            dataIndex: "submitted",
            key: "submitted",
            // ...getColumnSearchProps("submitted"),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (_, record) => {
                let color = "";
                switch (record.status) {
                    case "Failed":
                    case "Dismissal":
                    case "Resignation":
                    case "EOPE":
                    case "AWOL":
                        color = "red";
                        break;
                    case "Passed":
                    case "Hired":
                    case "Regular":
                        color = "green";
                        break;
                    case "Pending":
                        color = "yellow";
                        break;
                    case "Initial Phase":
                        color = "orange";
                        break;
                    case "Final Phase":
                        color = "blue";
                        break;
                    case "Pooling":
                        color = "purple";
                        break;
                }
                return (
                    <Tag color={color} key={record.key}>
                        {record.status}
                    </Tag>
                );
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_, record) => {
                return (
                    <>
                        <ApplicantMenuSection
                            interviewer={interviewer}
                            data={record}
                        />
                    </>
                );
            },
        },
    ];

    const url = window.location.pathname + window.location.search;

    const getQueryParam = (url, paramName) => {
        const searchParams = new URLSearchParams(url.split("?")[1]);
        return searchParams.get(paramName);
    };

    const page = getQueryParam(url, "page");
    const categories = getQueryParam(url, "categories");

    const paginationConfig = {
        current: page,
        pageSize: pageSize,
        total: applicants.last_page * pageSize,
        onChange: (page, pageSize) => {
            router.visit(window.location.pathname + `?page=${page}`);
            setCurrent(page);
            setPageSize(pageSize);
        },
    };

    return (
        <div>
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-x-3 mb-4">
                    <h2 className="text-lg font-medium text-gray-800">
                        <b>Applicant(s) Records</b>
                        <AddApplicantsSection />
                    </h2>
                </div>
                {/* <div className='mr-8'>
                    <ApplicantsDropdownFilterComponents filterDatas={filterDatas} />
                </div> */}
            </div>

            <div className="flex flex-col items-start w-96 ">
                <ApplicantSearchSection />
            </div>
            <Table
                pagination={paginationConfig}
                columns={columns}
                dataSource={filteredDatas}
                className="mt-4"
            />
        </div>
    );
}
