
/** This is the props for PComponent
 * @prop text some text
 * @prop handleClick callback for click
 * @interface 
 */
interface PComponentProps {
  /** This is some text */
  text: string;
  /** Callback to handle click */
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
