import React from 'react';

import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    Platform,
    TextInput,
    Image,
    StyleSheet,
    StatusBar,
    Touchable,
    Alert
} from 'react-native';

import Users from './Users';

import { LinearGradient } from 'expo-linear-gradient';

import * as Animatable from 'react-native-animatable';

import { useTheme } from 'react-native-paper';

import { FontFamily, FontSize, Color, Border } from "./assets/GlobalStyles.js";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from './components/context'

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (userName, password) => {
        console.log(userName)
        console.log(password)
        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const {colors} = useTheme();

    

    return (
        <View style={styles.container}>
            <Image
                style={styles.vectorIcon2}
                resizeMode="cover"
                source={require("./assets/vector21.png")}
            />
            <Image
                style={[styles.vectorIcon3, styles.vectorIcon3Layout]}
                resizeMode="cover"
                source={require("./assets/vector31.png")}
            />
            <Image
                style={styles.vectorIcon4}
                resizeMode="cover"
                source={require("./assets/vector4.png")}
            />
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <Animatable.View 
                animation="fadeInUpBig"
                style={[styles.header, {
                    backgroundColor: 'rgba(52, 52, 52, 0)'
                }]}
            >
            <View style={styles.header}>
                <Text style={styles.text_header}>Log In</Text>
            </View>
            <View style={styles.action}>
                <Feather 
                    name="hash"
                    color={Color.orange}
                    size={25}
                />
                <TextInput 
                    placeholder="Username"
                    placeholderTextColor={Color.silver}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    autoCapitalize="none"
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                </Animatable.View>
            }
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color={Color.khaki}
                        size={25}
                    />
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor={Color.silver}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                { data.isValidPassword ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }
                <TouchableOpacity>
                    <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle(data.username, data.password)}}
                >
                    <LinearGradient
                        colors={[Color.teal, '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Log In</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.bottomSign}>
                    Or sign in with
                </Text>
                <View style={{marginTop: 30}}>
                    <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-around', marginLeft: 50}}>
                        <TouchableOpacity>
                            <Image 
                                resizeMode="cover"
                                source={require("./assets/google-icon--colour.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                resizeMode="cover"
                                source={require("./assets/facebook-icon--colour.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                resizeMode="cover"
                                source={require("./assets/linkedin-icon--colour.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 40}}>
                        <Text style={styles.newToShome}>New to ShoMe?</Text>
                        <Text style={styles.text}>{` `}</Text>
                        <TouchableOpacity onPress={() => {navigation.navigate("SignUp")}}>
                            <Text style={styles.register}>Register!</Text>
                        </TouchableOpacity>
                </View>

                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity> */}
            </View>
            </Animatable.View>
        </View>
        // <View style={styles.iphone1313Pro8}>
        //     <Text style={[styles.logIn, styles.logTypo]}>Log In</Text>
        //     <Text style={[styles.orSignIn, styles.orSignInTypo]}>
        //         Or sign in with
        //     </Text>
        //     <Text style={[styles.newToShomeContainer, styles.orSignInTypo]}>
        //         <Text style={styles.newToShome}>New to ShoMe?</Text>
        //         <Text style={styles.text}>{` `}</Text>
        //         <Text style={styles.register}>Register</Text>
        //     </Text>
        //     <Text>
        //         <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        //     </Text>
        //     <Text>
        //         <Text style={[styles.password, styles.emailTypo]}>Password</Text>
        //     </Text>
        //     <View style={[styles.iphone1313Pro8Child, styles.iphone1313Layout]} />
        //     <View style={[styles.iphone1313Pro8Item, styles.iphone1313Layout]} />
        //     <View style={[styles.iphone1313Pro8Inner, styles.iphone1313Layout]} />
        //     <Image
        //         style={[styles.linkedinIconColour, styles.iconPosition]}
        //         resizeMode="cover"
        //         source={require("./assets/linkedin-icon--colour.png")}
        //     />
        //     <Image
        //         style={styles.googleIconColour}
        //         resizeMode="cover"
        //         source={require("./assets/google-icon--colour.png")}
        //     />
        //     <View style={[styles.lineView, styles.lineViewLayout]} />
        //     <View style={[styles.iphone1313Pro8Child1, styles.lineViewLayout]} />
        //     <Image
        //         style={[styles.vectorIcon, styles.vectorIconLayout]}
        //         resizeMode="cover"
        //         source={require("./assets/vector3.png")}
        //     />
        //     <Image
        //         style={[styles.vectorIcon1, styles.vectorIconLayout]}
        //         resizeMode="cover"
        //         source={require("./assets/vector11.png")}
        //     />
        //     <View style={styles.rectangleView} />
        //     <Image
        //         style={[styles.facebookIconColour, styles.iconPosition]}
        //         resizeMode="cover"
        //         source={require("./assets/facebook-icon--colour.png")}
        //     />
        //     <View style={[styles.iphone1313Pro8Child2, styles.vectorIcon3Layout]} />
        //     <Text style={[styles.logIn1, styles.logTypo]}>Log In</Text>
        //     <Image
        //         style={styles.vectorIcon2}
        //         resizeMode="cover"
        //         source={require("./assets/vector21.png")}
        //     />
        //     <Image
        //         style={[styles.vectorIcon3, styles.vectorIcon3Layout]}
        //         resizeMode="cover"
        //         source={require("./assets/vector31.png")}
        //     />
        //     <Image
        //         style={styles.vectorIcon4}
        //         resizeMode="cover"
        //         source={require("./assets/vector4.png")}
        //     />
        // </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Color.floralwhite
      },
      header: {
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 50,
      },
      footer: {
          flex: 2,
          marginTop: -10,
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30
      },
      text_header: {
          color: '#000',
          fontWeight: 'bold',
          fontSize: 40,
          marginLeft: 30
      },
      text_footer: {
          color: '#05375a',
          fontSize: 20
      },
      action: {
          flexDirection: 'row',
          marginTop: 40,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5
      },
      actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5
      },
      textInput: {
          flex: 1,
          marginTop: Platform.OS === 'ios' ? 0 : -12,
          paddingLeft: 10,
          color: '#05375a',
      },
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
      },
      button: {
          alignItems: 'center',
          marginTop: 50
      },
      signIn: {
          width: '80%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold'
      },
      bottomSign: {
        marginTop: 40,
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.silver
      },
    logTypo: {
      textAlign: "left",
      fontFamily: FontFamily.spartanBold,
      fontWeight: "700",
      position: "absolute",
    },
    orSignInTypo: {
      fontFamily: FontFamily.spartanMedium,
      fontWeight: "500",
      fontSize: FontSize.size_mini,
      textAlign: "left",
      position: "absolute",
    },
    emailTypo: {
      left: 85,
      color: Color.silver,
      fontFamily: FontFamily.spartanMedium,
      fontWeight: "500",
      fontSize: FontSize.size_mini,
      textAlign: "left",
      position: "absolute",
    },
    iphone1313Layout: {
      width: 77,
      borderWidth: 1,
      borderColor: "#b8b8b8",
      borderStyle: "solid",
      borderRadius: Border.br_8xs,
      top: 660,
      height: 40,
      position: "absolute",
    },
    iconPosition: {
      height: 30,
      top: 665,
      position: "absolute",
    },
    lineViewLayout: {
      height: 1,
      width: 314,
      borderTopWidth: 1,
      borderColor: "#dedede",
      left: 38,
      borderStyle: "solid",
      position: "absolute",
    },
    vectorIconLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      right: "83.08%",
      position: "absolute",
      overflow: "hidden",
    },
    vectorIcon3Layout: {
      width: 225,
      position: "absolute",
    },
    logIn: {
      top: 260,
      left: 40,
      fontSize: FontSize.size_16xl,
      color: Color.black,
      width: 167,
      height: 45,
    },
    orSignIn: {
      top: 617,
      left: 123,
      width: 125,
      color: Color.silver,
      
    },
    newToShome: {
      color: Color.silver,
      fontSize: 20
    },
    text: {
      color: Color.lightgray_100,
      
    },
    register: {
      color: Color.teal,
      fontSize: 18
    },
    newToShomeContainer: {
      top: 754,
      left: 91,
      width: 208,
    },
    email: {
      top: 380,
      width: 57,
    },
    password: {
      top: 444,
      width: 87,
    },
    iphone1313Pro8Child: {
      left: 47,
      height: 40,
    },
    iphone1313Pro8Item: {
      left: 156,
      height: 40,
    },
    iphone1313Pro8Inner: {
      left: 265,
      height: 40,
    },
    linkedinIconColour: {
      left: 291,
      width: 35,
    },
    googleIconColour: {
      top: 667,
      left: 72,
      width: 26,
      height: 26,
      position: "absolute",
    },
    lineView: {
      top: 407,
    },
    iphone1313Pro8Child1: {
      top: 470,
    },
    vectorIcon: {
      height: "2.49%",
      width: "5.38%",
      top: "44.55%",
      bottom: "52.96%",
      left: "11.54%",
    },
    vectorIcon1: {
      height: "2.61%",
      width: "4.87%",
      top: "52.01%",
      bottom: "45.38%",
      left: "12.05%",
    },
    rectangleView: {
      top: 835,
      left: 142,
      backgroundColor: Color.black,
      width: 106,
      height: 4,
      borderRadius: Border.br_xl,
      position: "absolute",
    },
    facebookIconColour: {
      left: 180,
      width: 30,
    },
    iphone1313Pro8Child2: {
      top: 518,
      left: 82,
      backgroundColor: Color.teal,
      borderRadius: Border.br_xl,
      height: 40,
    },
    logIn1: {
      top: 529,
      left: 165,
      fontSize: FontSize.size_base,
      color: Color.white,
      width: 63,
      height: 24,
    },
    vectorIcon2: {
      top: 807,
      left: 318,
      width: 210,
      height: 263,
      position: "absolute",
    },
    vectorIcon3: {
      top: 0,
      left: 0,
      height: 190,
    },
    vectorIcon4: {
      top: 177,
      left: 272,
      width: 171,
      height: 182,
      position: "absolute",
    },
    iphone1313Pro8: {
      borderRadius: Border.br_21xl,
      backgroundColor: Color.floralwhite,
      flex: 1,
      width: "100%",
      height: 844,
      overflow: "hidden",
    },
  });