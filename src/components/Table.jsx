import React from "react";
import {Button, Table} from 'antd';
import 'antd/dist/antd.css';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        key: 'btns',
        dataIndex: 'btns',
        render: (text, record) => {
            return <Button danger> Delete</Button>
        }
    },
];

const TableCustom = ({data, isLoading}) => {
    return <Table size='small' pagination={{pageSize: 20, hideOnSinglePage:true}} columns={columns} loading={isLoading} dataSource={data} />
}
export default TableCustom

