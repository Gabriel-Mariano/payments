import { TouchableOpacityProps } from "react-native";

interface IButtonProps extends TouchableOpacityProps {
    title:string;
    hasImage?:boolean;
    titleColor?:string;
}

export { IButtonProps };