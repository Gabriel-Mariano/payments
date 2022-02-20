import React, { useState } from 'react';

import { View, Text} from 'react-native';
import { IModalComponentProps } from './types';
import { styles } from './styles';

import Modal from 'react-native-modal';
import uuid from 'react-native-uuid';

import { InputComponent } from '../Input';
import { Button } from '../Button';
import moment from 'moment';

const FormModal:React.FC<IModalComponentProps> = props => {
    const { 
        title, 
        description, 
        isVisible,
        setIsVisible,
        data,
        setData, 
        onPress, 
        onClose, 
        buttonText, 
        ...modalProps 
    } = props;

    const [ paymentTitle, setPaymentTitle ] = useState('');
    const [ day, setDay ] = useState('');
    const [ month, setMonth] = useState('');
    const [ year , setYear ] = useState('');
    const [ value, setValue ] = useState(''); 

    const [paymentTitleError, setPaymentTitleError] = useState('');
    const [dateError, setDateError ] = useState('');
    const [valueError, setValueError] = useState('');

    const validateFields = () => {
        if(
            paymentTitle === '' &&
            day === '' && 
            month === '' &&
            year === '' &&
            value === ''
        ) {
            setPaymentTitleError('Campo obrigatório');
            setDateError('Campos obrigatórios');
            setValueError('Campo obrigatório');
            return false;
        } else {
            setPaymentTitleError('');
            setDateError('');
            setValueError('');
        }
        if(paymentTitle === ''){
            setPaymentTitleError('Campo obrigatório');
            return false;
        } else {
            setPaymentTitleError('')
        }
        if(day === '' || month === '' || year === ''){
            setDateError('Campos obrigatórios');
            return false;
        } else {
            setDateError('')
        }
        if(value === ''){
            setValueError('Campo obrigatório');
            return false;
        } else {
            setValueError('')
        }
        return true;
    }

    const validateDate = () => {
        const today = new Date();
        const date = `${day}-${month}-${year}`;

       return moment(date,'DD-MM-YYYY').isAfter(today)
    }


    const register = () => {
        const isValid = validateFields();
        const isDateValid = validateDate();

        if(!isValid){
            return;
        }

        if(!isDateValid){
            setDateError('Não pode cadastrar datas anteriores')
            return;
        }

        const formatData = {
            uuid:uuid.v4(),
            title: paymentTitle,
            date: `${day}/${month}/${year}`,
            value: Number(value)
        }

        setData!([
            ...data,
            formatData
        ]);
        setIsVisible(false);
        clearForm();
    }

    const clearForm = () => {
        setPaymentTitle('')
        setDay('')
        setMonth('')
        setYear('')
        setValue('')

        setPaymentTitleError('')
        setDateError('')
        setValueError('')
    }

    return (
            <Modal 
                isVisible={isVisible}
                onBackdropPress={modalProps.onDismiss}
            >
                <View style={styles.modal}>
                    <InputComponent 
                        label="Título"
                        placeholder="Ex: Aluguel da casa .. " 
                        value={paymentTitle}
                        onChangeText={(text)=> setPaymentTitle(text) }
                        style={styles.title}
                        errorMessage={paymentTitleError}   
                    />
                    <View>
                        <View style={styles.wrapperDate}>
                            <InputComponent 
                                style={styles.date}
                                label="Dia"
                                value={day}
                                onChangeText={(text)=> setDay(text) }
                            /> 
                            <Text style={styles.stripe}>
                                /
                            </Text>

                            <InputComponent 
                                style={styles.date}
                                label="Mês"
                                value={month}
                                onChangeText={(text)=> setMonth(text) }
                            />
                            <Text style={styles.stripe}>
                                /
                            </Text>
                            
                            <InputComponent 
                                style={styles.year}
                                label="Ano"
                                value={year}
                                onChangeText={(text)=> setYear(text) }
                            />
                        </View>
                        <View style={styles.wrapperMessageError}>
                            <Text style={styles.textError}>
                                { 
                                    dateError
                                        ? dateError
                                        : null
                                }
                            </Text>
                        </View>
                    </View>
                    

                    <InputComponent 
                        label="Valor a pagar"
                        placeholder="Ex: R$ 90,00" 
                        value={value}
                        onChangeText={(text) => setValue(text) }
                        style={styles.totally}
                        errorMessage={valueError}
                    />
                    <Button 
                        title="Cadastrar" 
                        titleColor='#fff'
                        hasImage={false}
                        style={styles.customButton}
                        onPress={register}
                    />
                </View>
            </Modal>
    )
}

export { FormModal };