import React,{Component} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {DimensionsUtils} from "../../../utils";
import colors from "../../../utils/Colors";
import CustomIcon from "../../Icons/CustomIcon";
import {Body_1} from "../typhography/bodies";

export class CalendarBodyYear extends Component {
    static defaultProps = {
      upperLineColor:colors.superLightPurple,
      lowerLineColor:colors.lightPurple,
    };

    render(){
        const { container, upperLine, lowerLine } = styles;
        const {
            calendar,
            currentYear,
            upperLineColor,
            lowerLineColor,
            textColor,
            backgroundColor,
            onLeftPress,
            onRightPress
        } = this.props;
        const isFirstYear = calendar[0].year === currentYear;
        const isLastYear = calendar[calendar.length-1].year === currentYear;
        return (
            <View style={{backgroundColor: backgroundColor, width:"100%" }}>
                <View style={[upperLine,{backgroundColor: upperLineColor}]}/>
                <View style={container}>
                    <TouchableOpacity disabled={isFirstYear} onPress={onLeftPress}>
                        <CustomIcon style={{opacity: isFirstYear ? 0.5 :1}} color={textColor} name={"arrow_left"} size={DimensionsUtils.getIconSize(24)}/>
                    </TouchableOpacity>
                    <Body_1 text={currentYear} color={textColor} bold/>
                    <TouchableOpacity disabled={isLastYear} onPress={onRightPress}>
                        <CustomIcon style={{opacity: isLastYear ? 0.5 :1}} color={textColor} name={"arrow_right"} size={DimensionsUtils.getIconSize(24)}/>
                    </TouchableOpacity>
                </View>
                <View style={[lowerLine,{backgroundColor: lowerLineColor}]}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding:DimensionsUtils.getDP(21),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    upperLine:{
        height:1,
        width:"100%"
    },
    lowerLine:{
        height:1,
        flex:1,
        marginHorizontal:DimensionsUtils.getDP(16)
    }
});
