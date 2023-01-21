import { useCallback } from "react";
import { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { OrderItem } from "../../components";
import { getOrders, deleteOrder } from "../../store/actions";
import { styles } from "./styles";

const Orders = ({ navigation }) => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.list);
    const onDelete = (id) => {
        dispatch(deleteOrder(id));
    };

    useFocusEffect(
        useCallback(() => {
            dispatch(getOrders());
        }, [dispatch])
    );

    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete}/>;
    return(
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderItem}   
                keyExtractor={item => item.id.toString()} 
            />
        </View>
    );
};

export default Orders;