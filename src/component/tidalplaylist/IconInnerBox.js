import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "component/GlobalStyles";

import { MoreHorizontal } from "@styled-icons/evaicons-solid";
import { Heart } from "@styled-icons/boxicons-solid";

const IconInnerBox = () => {
  const [like, setLike] = useState(false);

  return (
    <IconBox>
      <ShowOptions>
        <MoreHorizontal />
      </ShowOptions>
      <LikeBtn onClick={() => setLike(!like)}>
        <LikeIcon like={like} />
      </LikeBtn>
    </IconBox>
  );
};
const IconBox = styled.div`
  display: flex;
  align-items: center;
`;
const ShowOptions = styled.div`
  width: 24px;
  margin-left: 15px;
  color: white;
  opacity: 0.5;
`;
const LikeBtn = styled.div`
  width: 22px;
  margin-left: 15px;
  color: white;
`;
const LikeIcon = styled(Heart)`
  color: ${props => (props.like ? "cyan" : "white")};
`;

export default IconInnerBox;
