
import Example from './Example';
import { MRT_Cell } from 'mantine-react-table';

interface Props{
    children: any;
    data:any;
}

function Grid(props:Props) {
    let _columns: { header: any; accessorKey: any;Cell:any;}[] = [];
    
    props.children.map((child: any) =>{       
      _columns.push({
      header: child.props.header, 
      accessorKey: child.key,
      Cell: child.props.render?
            ({cell}:{cell:MRT_Cell})=>child.props.render(cell.getValue<string>())://renderedCellValue
            undefined
    })
  }
    
    );
    console.log(_columns);
    
  return (
    <Example data={props.data} columns={_columns}/>
  )
}

export default Grid