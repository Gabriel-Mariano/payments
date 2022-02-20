import React, { Dispatch } from "react";
import { ModalProps } from "react-native";

type IPaymentsValues = {
    uuid:any;
    title:string;
    date:string;
    value:number;
}


interface IModalComponentProps extends ModalProps {
    title?: string;
    description?: string;
    data:IPaymentsValues[];
    setData:React.Dispatch<React.SetStateAction<IPaymentsValues[]>>;
    isVisible: boolean;
    setIsVisible:React.Dispatch<React.SetStateAction<boolean>>;
    buttonText?: string;
    onPress?:() => void;
    onClose?: () => void;
}

export { IModalComponentProps, IPaymentsValues };