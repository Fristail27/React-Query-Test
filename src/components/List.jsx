import React from 'react'
import axios from "axios";
import TableCustom from "./Table";
import {Button} from "antd";
import ModalCus from "./Modal";
import {useMutation, useQuery, useQueryClient} from "react-query";

const reduce = (array) => {
    if (!array || !array.length) return []
    return array.map(el=> ({
        key: el.id,
        name: el.name,
        email: el.email,
        address: el.address.city,
    }))
}

const List = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false)

    const queryClient = useQueryClient()

    const { isLoading, isError, data, error, status } = useQuery('users',
        async ()=>axios('https://jsonplaceholder.typicode.com/users'), {refetchOnWindowFocus:false})
    const mutation = useMutation(newUser => axios.post('https://jsonplaceholder.typicode.com/users', newUser), {
        onSuccess: (data, variabless) => {
            queryClient.setQueryData('users', old => ({...old, data: [...old.data, variabless]}))
        }
    })
    const onOk = (body)=> {
        mutation.mutate(body)
    }


    return <React.Fragment>
        {isError &&  <div>{error.message}</div>}
        <Button onClick={()=> setIsModalVisible(true)} type='primary'>Add User</Button>
        <ModalCus isVisible={isModalVisible} changeVisible={setIsModalVisible} onOk={onOk}/>
        <TableCustom isLoading={isLoading || mutation.isLoading} data={reduce(data?.data)}/>
    </React.Fragment>
}

export default List