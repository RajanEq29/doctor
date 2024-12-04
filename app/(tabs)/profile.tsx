
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { AppButton, AppImage, AppText, AppView, BoxView, RowView } from "react-native-quick-components";


import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from "react";
import Topnavbar from "../navigation/topnavbar";



export default function ProfileScreen() {
    // const { data, isSuccess } = useGetAllPostQuery();

    // console.log(data)
    return (
        <AppView style={styles.container}>
            <Topnavbar />
            <AppView style={{ backgroundColor: "#050A30", height: 120, zIndex: -1, position: "relative", top: -20 }}>
            </AppView>
            <AppView style={{ justifyContent: 'center', alignItems: 'center' }}>
                <AppImage
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13BKV8WV4_tnm5OWK4RV-G9O5tzpfzGezdw&usqp=CAU',
                    }}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 60,
                        borderWidth: 5,
                        borderColor: '#F0F1F6',
                        marginTop: -70
                    }}
                    resizeMode="cover"
                />
                <AppText C="#050A30">Uday Sharma</AppText>
                <AppText C="#050A30" F_WEIGHT="200" F_SIZE={16}>udaysharma@gmail.com</AppText>
            </AppView>
            <AppView style={{
                flex: 1,
                margin: 25,
                marginBottom:20
            }}>
               
                <BoxView BG="white" MT={20} BOR={5} style={styles.shadowBox}>
                    <BoxView P={10} PX={10}>
                        <AppText F_SIZE={10} F_WEIGHT="600" C="black">
                            <AppText C="#050A30">
                                Data: 10-10-2024
                            </AppText>
                            <AppView style={styles.hr} />
                        </AppText>





                        <RowView style={styles.tableRow}>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">01</AppText>
                            </BoxView>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">
                                    <BoxView H={10} W={10} BG="green" BOR={500}></BoxView>  John Doe
                                </AppText>
                            </BoxView>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">Blood Test</AppText>
                            </BoxView>
                        </RowView>
                        <RowView style={styles.tableRow}>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">02</AppText>
                            </BoxView>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">
                                    <BoxView H={10} W={10} BG="green" BOR={500}></BoxView>  John Doe
                                </AppText>
                            </BoxView>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">Blood Test</AppText>
                            </BoxView>
                        </RowView>
                        <RowView style={styles.tableRow}>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">03</AppText>
                            </BoxView>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">
                                    <BoxView H={10} W={10} BG="green" BOR={500}></BoxView>  John Doe
                                </AppText>
                            </BoxView>
                            <BoxView>
                                <AppText F_SIZE={16} C="#050A30">Blood Test</AppText>
                            </BoxView>
                        </RowView>
                    </BoxView>
                </BoxView>
                <BoxView BG="white" MT={16} BOR={5} style={styles.shadowBox1} >
                    <AppView style={{flexDirection:"row", justifyContent:'space-between'}} P={10}>
                    <AppText C="#050A30"><AntDesign name="edit" size={24} color="black" />  Edit Profile</AppText>
                    <AppText C="#050A30"><AntDesign name="right" size={24} color="black" /></AppText>
                    </AppView>
                </BoxView>
                <BoxView BG="white" MT={16} BOR={5} style={styles.shadowBox1} >
                    <AppView style={{flexDirection:"row", justifyContent:'space-between'}} P={10}>
                    <AppText C="#050A30"><MaterialCommunityIcons name="file-document-multiple-outline" size={24} color="black" />  Term and condition</AppText>
                    <AppText C="#050A30"><AntDesign name="right" size={24} color="black" /></AppText>
                    </AppView>
                </BoxView>
                <BoxView BG="white" MT={16} BOR={5} style={styles.shadowBox1} >
                    <AppView style={{flexDirection:"row", justifyContent:'space-between'}} P={10}>
                    <AppText C="#050A30"> <MaterialIcons name="privacy-tip" size={24} color="black" />  Privacy Policy</AppText>
                    <AppText C="#050A30"><AntDesign name="right" size={24} color="black" /></AppText>
                    </AppView>
                </BoxView>
               
            </AppView>

           
        </AppView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F1F6',
    },
    container1: {
        flex: 1,
        margin: 25
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'center',
    },
    shadowBox: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 2,
    },
    shadowBox1: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 2,
    },
   


});
