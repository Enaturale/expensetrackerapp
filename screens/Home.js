import React, {useState} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";



import {COLORS, FONTS, SIZES, icons} from '../constants';

const Home =() => {

    const confirmStatus="C"
    const pendingStatus="P"

    let Categories =[
        {
            id: 1,
            name: "Clothing",
            icon: icons.clothing,
            color:COLORS.peach,
            expenses:[
                {
                id: 1,
                title: "Shoes",
                description: "Shoes for Edith's wedding",
                total: 5000.00,
                status: confirmStatus,
                },
                {
                    id: 2,
                    title: "Lace Material",
                    description: "Aso-ebi for Edith's wedding",
                    total: 6000.00,
                    status: confirmStatus,
                },
                {
                    id: 3,
                    title: "Head tie",
                    description: "Aso-ebi for Edith's wedding",
                    total: 3000.00,
                    status: confirmStatus,
                },
                 
            ]
        },
        {
            id: 2,
            name: "Feeding",
            icon: icons.feeding,
            color: COLORS.purple,
            expenses: [
                {
                    id: 1,
                    title: "Monday",
                    description: "Item 7, fish",
                    total: 1000.00,
                    status: pendingStatus,
                    },
                    {
                        id: 2,
                        title: "Lunch on Tuesday",
                        description: "Lunch with Elizabeth",
                        total: 600.00,
                        status: confirmStatus,
                    },
                    {
                        id: 3,
                        title: "Foodstuffs",
                        description: "Foodstuffs for weekend",
                        total: 6000.00,
                        status: pendingStatus,
                    },

            ]
        },
        {
            id: 3,
            name: "Transportation",
            icon: icons.transportation,
            color: COLORS.green,
            expenses: [
                {
                    id: 1,
                    title: "Monday",
                    description: "Work Duties",
                    total: 500.00,
                    status: pendingStatus,
                    },
                    {
                        id: 2,
                        title: "Pharmacy",
                        description: "Went to the pharmacy ",
                        total: 600.00,
                        status: confirmStatus,
                    },
                    {
                        id: 3,
                        title: "Market",
                        description: "Foodstuffs for weekend",
                        total: 200.00,
                        status: pendingStatus,
                    },

            ]
        },
        {
            id: 4,
            name: "Healthcare",
            icon: icons.healthcare,
            color: COLORS.red,
            expenses: [
                {
                    id: 1,
                    title: "Monthly Checkup",
                    description: "Monthly Checkup",
                    total: 3000.00,
                    status: pendingStatus,
                    },
                    {
                        id: 2,
                        title: "Drugs",
                        description: "Drugs for Headaches",
                        total: 100.00,
                        status: confirmStatus,
                    },
                    {
                        id: 3,
                        title: "Cream",
                        description: "Vagina Cream",
                        total: 800.00,
                        status: pendingStatus,
                    },

            ]
        },
        {
            id: 5,
            name: "Miscellanous",
            icon: icons.misc,
            color: COLORS.indigo,
            expenses: [
                {
                    id: 1,
                    title: "Monday",
                    description: "Item 7, fish",
                    total: 1000.00,
                    status: pendingStatus,
                    },
                    {
                        id: 2,
                        title: "Lunch on Tuesday",
                        description: "Lunch with Elizabeth",
                        total: 600.00,
                        status: confirmStatus,
                    },
                    {
                        id: 3,
                        title: "Foodstuffs",
                        description: "Foodstuffs for weekend",
                        total: 6000.00,
                        status: pendingStatus,
                    },

            ]
        }
    ]

    const [viewMode, setViewMode] = useState("chart")

    function renderNavBar(){
        return(
            <View style={{
                flexDirection:'row',
                alignItems:'flex-end', 
                height:90, 
                justifyContent:'space-between',
                paddingBottom:10,
                paddingHorizontal:SIZES.padding,
                backgroundColor: COLORS.white,
            }}
            >
                <TouchableOpacity
                  style={{justifyContent:'center', width: 50}}
                  onPress={() => console.log("Back")}
                >
                    <Image 
                    source={icons.back_arrow}
                    style={{height: 25, width:25, tintColor: COLORS.red}}
                    />
                </TouchableOpacity>

                <Text style={{...FONTS.h2, color: COLORS.primary, paddingTop:SIZES.padding}}>
                    My Expense Tracker
                </Text>

                <TouchableOpacity
                  style={{justifyContent:'center', alignItems:'flex-end', width: 50}}
                  onPress={() => console.log("More")}
                >
                    <Image 
                    source={icons.more}
                    style={{height: 25, width:25, tintColor: COLORS.red}}
                    />
                </TouchableOpacity>
            </View>
        )

    }

    function renderHeader(){
        return(
            <View style={{paddingHorizontal:SIZES.padding,paddingVertical: SIZES.padding,
              backgroundColor:COLORS.white}}>
                <View>
                    <Text style={{color: COLORS.red, ...FONTS.h2}}>My Expenses</Text>
                    <Text style={{color:COLORS.primary,...FONTS.h3}}>Check Summary</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: SIZES.padding, alignItems:'center'}}>
                    <View style={{height: 50, width: 50, backgroundColor: COLORS.lightGray, alignItems:'center',
                         borderRadius:25, justifyContent:'center'}}>
                        <Image
                        source={icons.calender} 
                        style={{
                            height: 30,
                            width:30
                        }}
                        />
                    </View>
                    <View style={{marginLeft: SIZES.padding}}>
                        <Text style={{color: COLORS.red, ...FONTS.h3}}>22nd of Oct, 2021</Text>
                        <Text style={{color: COLORS.primary, ...FONTS.h4}}>Saved 10% more than last month</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategoryHeader(){
        return(
            <View 
            style={{flexDirection:'row', justifyContent:'space-between', padding: SIZES.padding,
                     alignItems:'center', backgroundColor:COLORS.white}}
            >
                {/* Title */}
                <View>
                    <Text style={{color:COLORS.red, ...FONTS.h3}}>CATEGORIES</Text>
                    <Text style={{color:COLORS.primary, ...FONTS.body4}}>Total</Text>
                </View>

                {/* Buttons */}
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                    style={{
                        alignItems:'center',
                        justifyContent: 'center',
                        height: 50,
                        width: 50,
                        backgroundColor: viewMode == "chart" ? COLORS.peach : null,
                        borderRadius: 25,
                        
                        
                    }}
                    onPress= {() => setViewMode ("chart")}
                    >
                        <Image source={icons.chart} resizeMode='contain' 
                               style={{height:20, width: 20
                               , tintColor:viewMode == "chart" ? COLORS.black : COLORS.deepGray,}} />
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={{
                        alignItems:'center',
                        justifyContent: 'center',
                        height: 50,
                        width: 50,
                        backgroundColor: viewMode == "menu" ?COLORS.peach: null,
                        borderRadius: 25,
                        
                    }}
                    onPress= {() => setViewMode ("menu")}
                    >
                        <Image source={icons.menu} resizeMode='contain'
                               style={{height:20, width: 20,
                                tintColor:viewMode == "menu" ? COLORS.black : COLORS.deepGray,}} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    return(
        <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
             {/* <Text>Home</Text>  */}
             {/* Creating a Nav Bar Section */}
             {renderNavBar()}

             {/* Header Section */}
             {renderHeader()}

             <View 
             style={{height:10, backgroundColor: COLORS.lightGray}}>
             </View>

             {/* <View
             style={{height:10, backgroundColor: COLORS.white}}>
             </View> */}

             {/* Category in header section */}
             {renderCategoryHeader()}
        </View>
    )
}

export default Home;