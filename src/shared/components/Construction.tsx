import styled from "styled-components";

const ConstructionWrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .contents {
    width: 100%;
    height: 150px;
    margin: 10px;
    border: dashed 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Construction = () => {
  return (
    <ConstructionWrap>
      <div className="contents">
        <div>Under Construction</div>
      </div>
    </ConstructionWrap>
  );
};

export default Construction;
