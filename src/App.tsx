import React, { useEffect } from 'react';
import './App.css';
import {useQuery,gql} from '@apollo/client';


interface StudentSubject {
  subjectId: string;
  subjectName: string;
  marks: number;
}

interface Launch {
  id: string;
  name: string;
  contact: string;
  result: StudentSubject[];
}

const GET_DATA=gql`{
     getAllStudents {
        id
        name
        contact
        result {
           subjectId
           subjectName
           marks
        }
    }
  }

`;

function App() {

  const{loading,error,data}=useQuery(GET_DATA);

  useEffect(() => {
    console.log(loading, error, data);
  }, [loading, error, data]);

  return (
    <div className="App">
      {data
        ? data.getAllStudents.map((launch:Launch) => (
            <div key={launch.id}>
              <p>
                {launch.id} {launch.name} {launch.contact}{' '}
                {launch.result.map((subject) => (
                  <span key={subject.subjectId}>
                    {subject.subjectName} {subject.marks}{' '}
                  </span>
                ))}
              </p>
            </div>
          ))
        : null}
    </div>
  );
}



export default App;
 