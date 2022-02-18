import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { styles } from './styles';

import { Header } from '../../../components/Header';
import Card from '../../../components/Card';
import AddButton from '../../../components/AddButton';
import ModalComponent from '../../../components/Modal';

type IPaymentsValues = {
    title:string;
    date:string;
    value:string;
}

const Home: React.FC = () => {
    const [payments, setPayments] = useState<IPaymentsValues[]>([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const addPayments = () => {
        setModalIsVisible(true);
    }

    const backdropPress = () => {
        setModalIsVisible(false);
    }

    const renderModal = () => (
        <ModalComponent 
            isVisible={modalIsVisible} 
            onDismiss={backdropPress}
            data={payments}
            setData={setPayments}
        />
    )
    
    return (
        <SafeAreaView style={styles.container}>
            <Header 
                hasProfile={true}
                hasBackground="#7A67EE"
            />
            <View style={styles.body}>
                <View style={styles.divisor}>
                    <Card amount={payments.length}/>
                </View>
                <View style={styles.areaTitle}>
                    <Text style={styles.title}>
                        Meus Boletos
                    </Text>
                    <Text style={styles.description}>
                        total {`\n`}<Text style={styles.bold}>R$ 0,00</Text>
                    </Text>
                </View>
            </View>
            <AddButton onPress={addPayments}/>
            {renderModal()}
        </SafeAreaView>
    );
}

export default Home;