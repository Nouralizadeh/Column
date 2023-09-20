

import { MRT_Cell, MantineReactTable, useMantineReactTable } from 'mantine-react-table';

interface Props{
    children: any;
    gridData:any[];
}

function Grid(props:Props) {
    let columns: { header: any; accessorKey: any;Cell:any;}[] = [];
    
    props.children.map((child: any) =>{       
      columns.push({
      header: child.props.header, 
      accessorKey: child.key,
      Cell: child.props.render?
            ({cell}:{cell:MRT_Cell})=>child.props.render(cell.getValue<string>())://renderedCellValue
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