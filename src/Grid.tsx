

import { MRT_Cell, 
         MRT_Row, 
         MantineReactTable, 
         useMantineReactTable } from 'mantine-react-table';

interface Props{
    children: any;
    gridData:any[];
    setGridData:(data?:any)=>void;
}

function Grid(props:Props) {
    let columns: { header: any; accessorKey: any;Cell:any;}[] = [];

    const onCellValueChange = (value:any,cell:any)=>{
      let changedData= props.gridData.slice()
      changedData[cell.row.id][cell.column.id]=value
      props.setGridData(changedData);
    }
    
    props.children.map((child: any) =>{       
      columns.push({
      header: child.props.header, 
      accessorKey: child.key,
      Cell: child.props.render?
            ({cell}:{cell:MRT_Cell;})=>child.props.render(cell.getValue<string>(),(value:any)=>onCellValueChange(value,cell)):
            undefined
    })
  }
    
    );
    const data=props.gridData
    const table = useMantineReactTable({
      columns,
      data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });
    
  return  <MantineReactTable table={table} />;
}

export default Grid