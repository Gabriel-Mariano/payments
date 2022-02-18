import React, { useState } from 'react';

import { View } from 'react-native';
import { IModalComponentProps } from './types/index.d';
import { styles } from './styles';

import Modal from 'react-native-modal';
import { InputComponent } from '../Input';
import { Button } from '../Button';

const ModalComponent:React.FC<IModalComponentProps> = props => {
    const { 
        title, 
        description, 
        isVisible,
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

    const register = () => {
        const formatData = {
            title: paymentTitle,
            date: `${day}/${month}/${year}`,
            value: value
        }

        setData!([
            ...data,
            formatData
        ]);
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
                    />
                    <View style={{ 
                        flexDirection:'row', 
                        alignItems:'center',
                    }}>
                        
                        <InputComponent 
                            style={{ 
                                width:60,
                                marginRight:20, 
                            }}
                            label="Dia"
                            value={day}
                            onChangeText={(text)=> setDay(text) }
                        /> 
                        
                        <InputComponent 
                            style={{ 
                                width:60,
                                marginRight:20, 
                            }}
                            label="Mês"
                            value={month}
                            onChangeText={(text)=> setMonth(text) }
                        />
                        
                        <InputComponent 
                             style={{ 
                                width:120,
                                marginRight:20, 
                            }}
                            label="Ano"
                            value={year}
                            onChangeText={(text)=> setYear(text) }
                        />
                    </View>

                    <InputComponent 
                        label="Valor a pagar"
                        placeholder="Ex: R$ 90,00" 
                        value={value}
                        onChangeText={(text) => setValue(text) }
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

export default ModalComponent;