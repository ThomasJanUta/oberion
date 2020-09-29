import React from "react";
import Layout from "../components/navidation/Layout";
import styled from "styled-components";


const NotFoundPage = () => (
  <Layout>
    <Main404>
      <h1>404 NOT FOUND</h1>
      <p>The page you are looking for doesn&#39;t exist.</p>
    </Main404>
  </Layout>
);
export default NotFoundPage;


const Main404 = styled.main`
  margin: 8rem auto;
  text-align: center;
`;
