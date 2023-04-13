import React, {useContext} from 'react';

import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    Platform,
    TextInput,
    Image,
    ScrollView,
    StyleSheet,
    StatusBar,
    Touchable,
    Alert
} from 'react-native';
import { AuthContext } from '../components/context'

import Users from '../data/Users'

import { LinearGradient } from 'expo-linear-gradient';

import * as Animatable from 'react-native-animatable';

import { useTheme } from 'react-native-paper';

import { FontFamily, FontSize, Color, Border } from "../assets/GlobalStyles.js";

import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirm_password: '',
        check_userInputChange: false,
        check_emailInputChange: false,
        check_nameInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        check_passwordInputChange: false,
        check_confirmPasswordInputChange: false
    });
    const { signIn } = React.useContext(AuthContext);

    const [finalData, setFinalData] = React.useState({
        id: 0,
        name: '',
        email: '',
        username: '',
        password: '',
        userToken: ''
    })

    const textNameChange = (val) => {
        if( val.length > 1 ) {
            setData({
                ...data,
                name: val,
                check_nameInputChange: true
            });
        } else {
            setData({
                ...data,
                name: val,
                check_nameInputChange: false
            });
        }
    }

    const textEmailChange = (val) => {
        if( val.length !== 0 && val.includes("@") ) {
            setData({
                ...data,
                email: val,
                check_emailInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_emailInputChange: false
            });
        }
    }

    const textUserChange = (val) => {
        if( val.length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_userInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_userInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.length >= 8 ) {
            setData({
                ...data,
                password: val,
                check_passwordInputChange: true
            });
        } else {
            setData({
                ...data,
                password: val,
                check_passwordInputChange: false
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        if( val.localeCompare(data.password) == 0 ) {
            setData({
                ...data,
                confirm_password: val,
                check_confirmPasswordInputChange: true
            });
        } else {
            setData({
                ...data,
                confirm_password: val,
                check_confirmPasswordInputChange: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const signupHandle = ({navigation}) => {
        let num = Users.length;
        if(data.check_nameInputChange && data.check_emailInputChange &&
            data.check_passwordInputChange && data.check_confirmPasswordInputChange
            && data.check_userInputChange) {
                console.log(finalData)
                console.log(Users)
                setFinalData({
                    id: num + 1,
                    name: data.name,
                    email: data.email,
                    username: data.username,
                    password: data.password,
                });
                Users.push(finalData)
            }
        else {
            Alert.alert('Wrong Input!', 'All values must be filled properly!', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(true)
    }

    const {colors} = useTheme();

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image
                style={styles.vectorIcon2}
                resizeMode="cover"
                source={require("../assets/vector21.png")}
            />
            <Image
                style={[styles.vectorIcon3, styles.vectorIcon3Layout]}
                resizeMode="cover"
                source={require("../assets/vector31.png")}
            />
            <Image
                style={styles.vectorIcon4}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
            />
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <Animatable.View 
                animation="fadeInUpBig"
                style={[styles.header, {
                    backgroundColor: 'rgba(52, 52, 52, 0)'
                }]}
            >
            <View style={styles.header}>
                <Text style={styles.text_header}>Sign Up</Text>
            </View>
                <View style={{marginTop: 30}}>
                    <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-around', marginLeft: 50}}>
                        <TouchableOpacity>
                            <Image 
                                resizeMode="cover"
                                source={require("../assets/google-icon--colour.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                resizeMode="cover"
                                source={require("../assets/facebook-icon--colour.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image 
                                resizeMode="cover"
                                source={require("../assets/linkedin-icon--colour.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.bottomSign}>
                    Or register with email
                </Text>
            <View style={styles.action}>
                <Feather 
                    name="user"
                    color={Color.teal}
                    size={25}
                />
                <TextInput 
                    placeholder="Name"
                    placeholderTextColor={Color.silver}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    onChangeText={(val) => textNameChange(val)}
                    autoCapitalize="none"
                />
                {data.check_nameInputChange ? 
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
            { data.check_nameInputChange ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Name required.</Text>
                </Animatable.View>
            }
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
                    onChangeText={(val) => textUserChange(val)}
                    autoCapitalize="none"
                />
                {(data.check_userInputChange) ? 
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
            { data.check_userInputChange ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                </Animatable.View>
            }
            <View style={styles.action}>
                <Feather 
                    name="at-sign"
                    color={Color.tomato}
                    size={25}
                />
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor={Color.silver}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    onChangeText={(val) => textEmailChange(val)}
                    autoCapitalize="none"
                />
                {data.check_emailInputChange ? 
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
            { data.check_emailInputChange ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Please provide a valid email.</Text>
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
                { data.check_passwordInputChange ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }
            <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color={Color.khaki}
                        size={25}
                    />
                    <TextInput 
                        placeholder="Confirm Password"
                        placeholderTextColor={Color.silver}
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ? 
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
                { data.check_confirmPasswordInputChange ? null : 
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must match.</Text>
                    </Animatable.View>
                }
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By signing up you agree to our
                    </Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                    <Text style={styles.color_textPrivate}>{" "}and</Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
                </View>
                <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {signupHandle(navigation)}}
                >
                    <LinearGradient
                        colors={[Color.teal, '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 40, paddingBottom: 200}}>
                        <Text style={styles.newToShome}>Already a user?</Text>
                        <Text style={styles.text}>{` `}</Text>
                        <TouchableOpacity onPress={() => {navigation.navigate("SignIn")}}>
                            <Text style={styles.register}>Sign In!</Text>
                        </TouchableOpacity>
                </View>
            </View>
            </Animatable.View>
        </View>
        </ScrollView>
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

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Color.floralwhite,
        paddingTop: 300
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
        color: Color.silver,
        alignSelf: 'center'
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
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
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