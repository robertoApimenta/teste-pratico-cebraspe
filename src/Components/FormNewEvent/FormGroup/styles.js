import styled from "styled-components";

export const Container = styled.div`
  & + & {
    margin-top: 8px;
  }

  small {
    margin-left: 24px;
  }

  .ok {
    color: green;
  }

  .notOk {
    color: red;
  }
`;