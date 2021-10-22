import React from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";



import {COLORS, FONTS, SIZES, icons} from '../constants';

const Home =() => {

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
                    <Text style={{color:COLORS.primary,...FONTS.h3}}>Summary (private)</Text>
                </View>

                <View style={{flexDirection: 'row', marginTop: SIZES.padding, alignItems:'center'}}>
                    <View style={{height: 50, width: 50, color: COLORS.lightGray, alignItems:'center'}}>
                        <Image
                        source={icons.calender} 
                        style={{
                            height: 30,
                            width:30
                        }}
                        />
                    </View>
                    <View>
                        <Text>22nd of Oct, 2021</Text>
                        <Text>Saved 10% more than last month</Text>
                    </View>
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
        </View>
    )
}

export default Home;