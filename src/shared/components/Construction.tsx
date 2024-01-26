import styled from "styled-components";

const ConstructionWrap = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 400 1.4rem "Source Sans 3";
  .contents {
    width: 100%;
    height: 150px;
    margin: 10px;
    border: dashed 1px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center {
    text-align: center;
  }
`;

const Construction = () => {
  return (
    <ConstructionWrap>
      <div className="contents">
        <div className="center">
          <img src="assets/icon/search.gif" alt="" />
          <div>Under Construction</div>
        </div>
      </div>
    </ConstructionWrap>
  );
};

export default Construction;
