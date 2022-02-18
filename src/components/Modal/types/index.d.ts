import React, { Dispatch } from "react";
import { ModalProps } from "react-native";

type IPaymentsValues = {
    title:string;
    date:string;
    value:string;
}


interface IModalComponentProps extends ModalProps {
    title?: string;
    description?: string;
    data:IPaymentsValues[];
    setData:React.Dispatch<React.SetStateAction<IPaymentsValues[]>>;
    isVisible: boolean;
    buttonText?: string;
    onPress?:() => void;
    onClose?: () => void;
}

export { IModalComponentProps };