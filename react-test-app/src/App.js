import { useState, useEffect, } from 'react';
import styled from "styled-components";
import './App.css';
import A from './Comp/A';
import B from './Comp/B';

import { getPosts } from './API';

function App() {

  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
      }).catch((e) => {
        console.log(e)
        window.alert("getData API Error")
      })
    
  }, [])

  return (
    <Div>
      <Input 
        value={value}
        onChange={e => setValue(e.target.value)}>
      </Input>
      <Flex>
        <A msg={value} posts={posts}></A>
        <B msg={value} posts={posts}></B>
      </Flex>
    </Div>
  );
}

const Div = styled.div`
  padding: 1rem;
`

const Flex = styled.div`
  display: flex;
`

const Input = styled.input`

`
export default App;
