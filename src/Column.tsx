
export interface ColumnProps{
  key:string;
  header:string;
  render?:(cell?:any,onChange?:(value:any)=>void)=> void
  style?:string;
  onClickHandler?:(e?:any)=> void;
  onDblClickHandler?:(e?:any)=> void;
  onDrag?:(e?:any)=> void;
  onDrop?:(e?:any)=> void;
}
function Column(props:ColumnProps) {
  return (
    <div>Column</div>
  )
}

export default Column