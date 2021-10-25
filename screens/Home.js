import React, {useState} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";



import {COLORS, FONTS, SIZES, icons} from '../constants';

const Home =() => {

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
                               style={{height:20, width: 20}} />
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
                               style={{height:20, width: 20}} />
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