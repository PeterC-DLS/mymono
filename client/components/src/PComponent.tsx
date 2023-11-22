
interface PComponentProps {
  text: string;
  handleClick: () => void;
}

function PComponent(props: PComponentProps) {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}


export type { PComponentProps };
export default PComponent;
