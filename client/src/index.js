import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

//contexts
import {AuthProvider} from './contexts/AuthContext'

import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient({
  //başka bir tab'a geçip tekrar sayfaya döndüğümüz ya da 
  //aynı tab içinde farklı sayfalar arasında geçiş yaptığımız her seferinde 
  //tekrar fetch'leme yapmaması için bu ayarları verdik...
  defaultOptions:{
    queries:{
      refetchOnMount:false,
      refetchOnWindowFocus:false
    }
  }
})

ReactDOM.render(

    <QueryClientProvider client={queryClient}>     
      <ChakraProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
