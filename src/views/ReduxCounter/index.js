import React from "react";

import { Wrapper, Row, Button, Box, Card } from "bushido-strap";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/counter";

import { Link } from "react-router-dom";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const ReduxCounter = () => {
  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.count);
  return (
    <Wrapper>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Card invert w="20rem">
        <Box h="2rem" />
        <Button invert onClick={() => dispatch(increment())}>
          ++
        </Button>
        <Box h="2rem" />
        <Row ac_center jc_around w="75%">
          <Box>Clicked</Box>
          <Box>
            <code>{count}</code>
          </Box>
          <Box>times!!!</Box>
        </Row>
        <Box h="2rem" />
        <Button invert onClick={() => dispatch(decrement())}>
          --
        </Button>
        <Box h="2rem" />
        <Query
          query={gql`
            query {
              hello
            }
          `}
        >
          {({ data }) => {
            console.log(data);
            return <Card>{data?.hello}</Card>;
          }}
        </Query>
      </Card>
    </Wrapper>
  );
};

export default ReduxCounter;
