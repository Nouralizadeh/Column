
import {
  MantineReactTable,
  useMantineReactTable,
} from 'mantine-react-table';


interface Props{
  data:any;
  columns:any;
}

const Example = ({data,columns}:Props) => {
  
  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MantineReactTable table={table} />;
};

export default Example;