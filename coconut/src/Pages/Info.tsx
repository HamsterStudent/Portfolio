import styled from "styled-components";

const InfoWrap = styled.div`
  width: 500px;
  height: 500px;
  background: plum;
  cursor: pointer;
`;

function Info() {
  const handleDragEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("X: " + e.clientX + " | Y: " + e.clientY);
    console.log(e);
  };
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("X: " + e.clientX + " | Y: " + e.clientY);
    console.log(e);
    console.log("hamster");
  };
  return (
    <InfoWrap
      draggable
      onDragStart={handleDragEvent}
      onDragEnd={onDragEnd}
    ></InfoWrap>
  );
}

export default Info;
