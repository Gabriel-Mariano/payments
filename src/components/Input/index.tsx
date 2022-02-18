import React from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { IInputComponentProps } from './types/index.d';
import { styles } from './styles';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';

const InputComponent:React.FC<IInputComponentProps> = props =>{
    const {
        label,
        maxWidth,
        leftContent,
        rightContent,
        showPassword,
        errorMessage,
        ...inputProps
    } = props;

    const renderLeftContent = () =>{
        return  leftContent && 
            <View style={styles.leftContent}>
                {leftContent}
            </View>
    }

    const renderRightContent = () =>{
        return  rightContent && 
            <Pressable style={styles.rightContent} onPress={showPassword}>
                {rightContent}
            </Pressable>
    }

    return (
        <View style={[
            inputProps.style 
            ? inputProps.style 
            : styles.container 
        ]}>
            { label && <Text style={styles.label}>{label}</Text> }
            <View style={styles.wrapperInput}>
                {renderLeftContent()}         
                <TextInput
                    onChangeText={inputProps.onChangeText}
                    value={inputProps.value}
                    placeholder={inputProps.placeholder}
                    keyboardType={inputProps.keyboardType}
                    autoCapitalize={inputProps.autoCapitalize}
                    secureTextEntry={inputProps.secureTextEntry}
                    style={[
                        styles.textInput,
                        { width: 
                            leftContent && rightContent
                            ? '70%'
                            : leftContent || rightContent
                            ? '85%'
                            : '100%'
                        }
                    ]}
                />
                {renderRightContent()}
            </View>
            <View>
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>
            </View>
        </View>
    );
}

export { InputComponent };