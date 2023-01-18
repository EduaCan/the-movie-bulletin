import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/AppLayout/Layout'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'



export default function App({ Component, pageProps }: AppProps) {

const persistor = persistStore(store)


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </PersistGate>
    </Provider>
  )
}
