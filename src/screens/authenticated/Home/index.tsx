import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { styles } from './styles';

import { Header } from '../../../components/Header';
import { CardHeader } from '../../../components/CardHeader';
import { AddButton } from '../../../components/AddButton';
import { FormModal } from '../../../components/FormModal';
import { IPaymentsValues } from '../../../components/FormModal/types';
import { Card } from '../../../components/Card';

const Home: React.FC = () => {
    const [payments, setPayments] = useState<IPaymentsValues[]>([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const addPayments = () => {
        setModalIsVisible(true);
    }

    const backdropPress = () => {
        setModalIsVisible(false);
    }

    const renderTotally = () => {
        let result = payments.reduce((prev:any,current) => 
            Number(prev) + Number(current.value)
        , 0);

        return result
    }

    const renderModal = () => (
        <FormModal 
            isVisible={modalIsVisible} 
            setIsVisible={setModalIsVisible}
            data={payments}
            setData={setPayments}
            onDismiss={backdropPress}
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
                    <CardHeader amount={payments.length}/>
                </View>
                <View style={styles.areaTitle}>
                    <Text style={styles.title}>
                        Meus Boletos
                    </Text>
                    <Text style={styles.description}>
                        total {`\n`}<Text style={styles.bold}>R$ {renderTotally().toFixed(2)}</Text>
                    </Text>
                </View>
                <FlatList
                    data={payments}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item)=> item.uuid }
                    renderItem={({ item, })=> {
                        return (
                            <Card 
                                uuid={item.uuid}
                                title={item.title}
                                date={item.date}
                                totally={item.value}
                                data={payments}
                                setData={setPayments}
                            />
                        );
                    }}
                />
            </View>
            <AddButton onPress={addPayments}/>
            {renderModal()}
        </SafeAreaView>
    );
}

export default Home;