import styled from "styled-components";

const InfoWrap = styled.div`
  width: 500px;
  height: 500px;
  background: plum;
`;

function Info() {
  const dragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event.target);
  };
  return (
    <div>
      <InfoWrap onDragStart={dragStart} />
    </div>
  );
}

export default Info;
