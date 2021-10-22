import React from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";



import {COLORS, FONTS, SIZES, icons} from '../constants';

const Home =() => {

    function renderNavBar(){
        return(
            <View>
                <TouchableOpacity>
                    <Image 
                    source={icons.back_arrow}
                    style={{height: 30, width:30, tintColor: COLORS.primary}}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    source={icons.more}
                    style={{height: 30, width:30, tintColor: COLORS.primary}}
                    />
                </TouchableOpacity>
            </View>
        )

    }

    return(
        <View style={{flex: 1, backgroundColor: COLORS.lightGray}}>
             {/* <Text>Home</Text>  */}
             {/* Creating a Nav Bar Section */}
             {renderNavBar()}
        </View>
    )
}

export default Home;