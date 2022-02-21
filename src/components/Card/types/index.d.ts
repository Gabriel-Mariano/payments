import { IPaymentsValues } from "../../FormModal/types";

interface ICardProps {
    uuid:string;
    title:string;
    date:string;
    totally:number;
    data:IPaymentsValues[];
    setData:React.Dispatch<React.SetStateAction<IPaymentsValues[]>>;
}

export { ICardProps };