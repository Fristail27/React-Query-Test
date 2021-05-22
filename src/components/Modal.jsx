import React from "react";
import {Input, Modal} from "antd";
import {useForm} from "react-hook-form";

const ModalCus = ({isVisible, changeVisible, onOk}) => {

    const {register, watch} = useForm();
    const watchData = watch()

    const onOkHandler = () => {
        console.log(watchData)
        changeVisible(false)
        onOk({
            id: Math.random(),
            key: Math.random(),
            "name": watchData.name,
            "email": watchData.email,
            "address": watchData.address
        })
    }

    return (
            <Modal title="Basic Modal" visible={isVisible} onOk={onOkHandler} onCancel={() => changeVisible(false)}>
                Name: <Input {...register("name")}/>
                Email: <Input {...register("email")}/>
                Address: <Input {...register("address")}/>
            </Modal>
    )
}
export default ModalCus