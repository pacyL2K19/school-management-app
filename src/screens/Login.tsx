import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions
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
    setTitle(!isSignup ? 'Se connecter' : 'Connexion')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navigation}>
        <Text style={{
          fontSize: 30,
          marginBottom: 50,
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
          width={Dimensions.get('window').width / 2}
          onTap={onTapAuthenticate}
        />

        <ButtonWithTitle
          title={
            !isSignup
              ? 'Pas de compte ? En creer'
              : 'Vous avez deja un compte ? Connectez-vous'
          }
          height={50}
          width={350}
          onTap={onTapOptions}
          isNoBg={true}
        />
      </View>
      <View style={styles.footer}></View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Dimensions.get('window').height / 8
  },
  navigation: {
    flex: 3,
    justifyContent: 'center',
    paddingLeft: 30 
  },
  body: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  footer: {
    flex: 3
  }
})

const mapStateToProps = (state: ApplicationState) => ({
  userReducer: state.userReducer
})

const LoginScreen = connect(mapStateToProps, { OnUserLogin, OnUserSignup })(
  _LoginScreen
)

export { LoginScreen }
