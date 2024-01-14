

// import { MRT_Cell, 
//          MRT_Row, 
//          MantineReactTable, 
//          useMantineReactTable } from 'mantine-react-table';
         import { DataTable } from 'mantine-datatable';

interface Props{
    children: any;
    gridData:any[];
    setGridData:(data?:any)=>void;
}

function Grid(props:Props) {
    let columns: { header?: any; accessor: any;render?:any; width:string|number}[] = [];

    const onCellValueChange = (value:any,key:string,row:any)=>{
      debugger
      let newRow = {...row}
      newRow[key] = value
      let changedData= props.gridData.slice().map(dataRow=>{if (JSON.stringify(dataRow)==JSON.stringify(row)) return newRow; else return dataRow })
      props.setGridData(changedData);
    }
    
    props.children.map((child: any) =>{       
      columns.push({
      width:"800",
      title: child.props.header, 
      accessor: child.key,
      render:child.props.render?
            (row: any)=>child.props.render(row[child.key],(value:any)=>onCellValueChange(value,child.key,row)):
            undefined,
    })
  }
    
    );
    const data=props.gridData
  return  <DataTable withTableBorder
                    withColumnBorders
                    striped
                    columns={columns} 
                    records={data}
                    />;
}

export default Grid