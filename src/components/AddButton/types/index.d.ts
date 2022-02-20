import { TouchableOpacityProps } from "react-native";

interface IAddButtonProps extends TouchableOpacityProps {
    title?:string;
    type?:string;
}

export { IAddButtonProps };