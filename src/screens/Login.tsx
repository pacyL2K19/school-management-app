import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native'
import { TextField } from '../components'
import { ButtonWithTitle } from '../components/ButtonWithTittle/ButtonWithTitle'
import { connect } from 'react-redux'
import {
  ApplicationState,
  OnUserLogin,
  OnUserSignup,
  UserState
} from '../redux'

import topImg from '../assets/logo.jpg'
import { whiteColor } from '../core'

interface LoginProps {
  OnUserLogin: Function
  OnUserSignup: Function
  userReducer: UserState
}

const _LoginScreen: React.FC<LoginProps> = ({
  OnUserLogin,
  OnUserSignup,
  userReducer
}) => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('Connexion')
  const [isSignup, setIsSignup] = useState(false)

  const onTapAuthenticate = () => {
    if (isSignup) {
      OnUserSignup(email, phone, password)
    } else {
      OnUserLogin(email, password)
    }
  }

  const onTapOptions = () => {
    setIsSignup(!isSignup)
    setTitle(!isSignup ? `S'inscrire` : 'Connexion')
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={topImg}
        style={styles.img}
      />
      <View>
        <Text style={{
          fontSize: 25,
          textAlign: 'center',
          marginBottom: 30,
          fontWeight: '400'
        }}>
          {title}
        </Text>
      </View>
      <View style={styles.body}>
        <TextField
          placeholder='Adresse email'
          onTextChange={setEmail}
          isSecure={false}
        />

        {isSignup && (
          <>
            <TextField
              placeholder='Numero de telephone'
              onTextChange={setPhone}
              isSecure={false}
            />
            <TextField
              placeholder='Classe'
              onTextChange={setPhone}
              isSecure={false}
            />
          </>
        )}
        <TextField
          placeholder='Mot de passe'
          onTextChange={setPassword}
          isSecure={true}
        />
        {
          !isSignup && (
            <TouchableOpacity>
              <Text style={styles.textLink}>
                Mot de passe oublie ?
              </Text>
            </TouchableOpacity>
          )
        }
        {isSignup && (
          <>
            <TextField
              placeholder='Confirmer mot de passe'
              onTextChange={setPhone}
              isSecure={true}
            />
            <TextField
              placeholder='OTP Code'
              onTextChange={setPhone}
              isSecure={false}
            />
          </>
        )}

        <ButtonWithTitle
          title={title}
          height={50}
          width={Dimensions.get('window').width - 60}
          onTap={onTapAuthenticate}
        />

        <ButtonWithTitle
          title={
            !isSignup
              ? 'Pas de compte ? En creer'
              : 'Vous avez deja un compte ? Connectez-vous'
          }
          height={50}
          width={Dimensions.get('window').width}
          onTap={onTapOptions}
          isNoBg={true}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    paddingTop: Dimensions.get('window').height / 15,
  },
  textLink: {
    marginLeft: '50%',
    marginVertical: 10,
    color: 'gray'
  },
  body: {
    alignItems: 'center',
    marginBottom: 100
  },
  img: {
    alignSelf: 'center',
    height: 100,
    borderRadius: 50,
    width: 100,
    margin: 15
  },
})

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.userReducer
})

const LoginScreen = connect(mapStateToProps, { OnUserLogin, OnUserSignup })(
  _LoginScreen
)

export { LoginScreen }
