import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient,
        InMemoryCache,
        ApolloProvider,
        gql
} from '@apollo/client';


let client=new ApolloClient({
  uri:'http://localhost:8080/graphql',
  cache:new InMemoryCache()
})

client.query({
  query:gql`{
    getAllStudents {
      id
      name
      contact
      result {
        subjectName
        marks
      }
    }
  }
  `
}).then((result)=>{console.log(result)});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


