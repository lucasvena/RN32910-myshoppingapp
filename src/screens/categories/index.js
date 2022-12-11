import React from'react';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import CategoryItem from '../../components/category-item';
import { CATEGORIES } from '../../constants/data/index';
import { COLORS } from '../../constants/themes/colors';
import { styles} from './styles';

const Categories = ({navigation, route }) => {
    const onSelected = (item) => {
        navigation.navigate( 'Products', { categoryId: item.id, title: item.title, color: item.color});
    };
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                kayExtractor={item => item.id.toString()}
                style={styles.containerList}
            />
        </SafeAreaView>
    );
};

export default Categories;