# Pasos

Para usar firebase tenemos que crear nuestro proyecto dentro de Firebase🔥

Una vez creado el proyecto, podremos acceder a la información para hacer la configuración dentro de nuestros proyectos.

Para comenzar la configuración tienes que dirigirte a Firebase y en la parte de "Información general" hacer click en la tuerca.

Esto te llevará a la configuración de Firebase, donde podrás encontrar el Firebase SDK Snippet, que usaremos para crear la configuración dentro del proyecto.

la información se ve algo así

```var firebaseConfig = {
    apiKey: "AIzaSyCvE5SaGGJESUDiEEFP1KrdXo2Q326u78E",
    authDomain: "hatsu-dev.firebaseapp.com",
    databaseURL: "https://hatsu-dev.firebaseio.com",
    projectId: "hatsu-dev",
    storageBucket: "hatsu-dev.appspot.com",
    messagingSenderId: "645905440317",
    appId: "1:645905440317:web:ac8a928ccd5c0d00129454",
    measurementId: "G-5W7NDS1GZQ" };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
```

Luego comenzaremos la instalación de Firebase.

# Instalación

para comenzar usaremos `npm install firebase` dentro del proyecto React.

Esto nos brindará las herramientas para poder trabajar con Firebase.

## Configuración dentro del proyecto

Crearemos una carpeta llamada `configs` dentro de la cual crearemos un archivo llamado fbConfig.js

fbConfig.js contiene toda la información relevante para Firebase, la información del SDK además de las herramientas que podremos usar.

Al final, este archivo deberá verse de esta forma

```import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvE5SaGGJESUDiEEFP1KrdXo2Q326u78E",
  authDomain: "hatsu-dev.firebaseapp.com",
  databaseURL: "https://hatsu-dev.firebaseio.com",
  projectId: "hatsu-dev",
  storageBucket: "hatsu-dev.appspot.com",
  messagingSenderId: "645905440317",
  appId: "1:645905440317:web:ac8a928ccd5c0d00129454",
  measurementId: "G-5W7NDS1GZQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
```

# Implementación de Firebase en las llamadas de React y Redux

Con esto hecho, comenzaremos con la implementación de Firebase dentro del código de Redux.

Como sabemos, las llamadas a Base de Datos se hacen dentro de las dependencias de Redux, específicamente en las Actions.
Como ejemplo:

```
export const createDocument = (document) => {
    return (dispatch, getState) => {
        // Acá va la llamada a Firestore dentro del Redux Action

        // y despachamos la acción al reducer

        dispatch ({ type:'ADD_DOCUMENT', document })
    }
}
```

# Redux y Firestore.

Instalaremos paquetes específicamente diseñados para Redux y Firebase, en proyectos de React para trabajar juntos.

## React-redux-firebase

Provee fijaciones o bindings al servicio entero de Firebase

## Redux-firestore

Provee Redux bindings para conectar con Firestore Databases

La instalación de ambos paquetes nos permitirá utilizar la API de Firebase para interactuar con nuestra base de datos de Firebase DENTRO de nuestras Actions de Redux.
También significa que podremos sincronizar nuestra base de datos Firebase con nuestra React Store.

## Usar Redux-Firebase & Redux-Firestore

En nuestro proyecto de React, nos dirigiremos a index.js, donde está nuestra Store.

Importaremos lo siguiente

```
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

```

### Uso

Para usarlos, haremos uso de Thunk.
Thunk es nuestro middleware, lo que nos permite interactuar entre nuestra Store pero agregando algo entremedio.

Thunk tiene un método llamado `withExtraArgument`, que usaremos para pasar como objeto ambas funciones que acabamos de importar.

Quedando de la siguiente forma

```
const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);
```

Implementando esto, Thunk en el Action nos permitirá agregar un argumento EXTRA dentro del Return del Action.

Recuerdan como se ve?

```
export const createDocument = (document) => {
    return (dispatch, getState) => {
        // Acá va la llamada a Firestore dentro del Redux Action

        // y despachamos la acción al reducer

        dispatch ({ type:'ADD_DOCUMENT', document })
    }
}
```

Ahora el return puede recibir 3 argumentos, donde el tercero es un objeto.

```
export const createDocument = (document) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Acá va la llamada a Firestore dentro del Redux Action

        // y despachamos la acción al reducer

        dispatch ({ type:'ADD_DOCUMENT', document })
    }
}
```

# Mejoras de Store

Para poder hacer uso de estas comunicaciones entre store y Firebase, necesitamos aplicar mejoras a nuestra Store. Esto se logra a través de compose, un método de redux.
Para aplicarlo necesitamos envolver nuestra Store y aplicar nuevos cambios

```
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fbConfig from "./configs/fbConfig";
import firebase from "firebase/app";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })), // PRIMERA MEJORA DE STORE, PASAMOS LAS FUNCIONES A LAS ACTIONS
    reduxFirestore(fbConfig) // SEGUNDA MEJORA DE STORE ENTREGAMOS LA CONFIGURACIÓN DE FIREBASE A LA FIRESTORE DE REDUX.
  )
);

// CREAMOS UNA INSTANCIA PARA REFERENCIAR FIREBASE Y SUS CONFIGURACIONES
const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};


//PASAMOS LA CONFIGURACIÓN EN EL REACTREDUXFIREBASEPROVIDER QUE ES EL PROVEEDOR DE LAS FUNCIONALIDADES DE FIREBASE A LA APP
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

```
