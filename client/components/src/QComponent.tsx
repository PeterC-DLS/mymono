
interface QComponentProps {
  qText: string;
  qHandleClick: () => void;
}

function QComponent(props: QComponentProps) {
  return (
    <button onClick={props.qHandleClick}>
      {props.qText}
    </button>
  );
}


export type { QComponentProps };
export default QComponent;
