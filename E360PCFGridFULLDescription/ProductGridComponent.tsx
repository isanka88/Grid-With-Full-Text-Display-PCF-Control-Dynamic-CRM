/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import { DetailsList } from "@fluentui/react/lib/DetailsList";

type DataSet = ComponentFramework.PropertyTypes.DataSet;

export interface IProductGridComponentProps {
  dataset: DataSet;
}

export const ProductGridComponent = React.memo(({ dataset }: IProductGridComponentProps): JSX.Element => {
  const [columns, setColumns] = React.useState<any[]>([]);
  const [items, setItems] = React.useState<any[]>([]);

  React.useEffect(() => {
    const columns = dataset.columns
      .sort((column1, column2) => column1.order - column2.order)
      .filter((item) => !item.isHidden)
      .map((column) => {

        if (column.name.includes("description") || column.name.includes("Description")) {
          return {
            name: column.displayName,
            fieldName: column.name,
            minWidth: (column.visualSizeFactor+20),
            minHeight: column.visualSizeFactor,
            key: column.name,
          };
        }
        else{
           return {
              name: column.displayName,
              fieldName: column.name,
              maxWidth: (column.visualSizeFactor+20),
              minHeight: column.visualSizeFactor,
              key: column.name,
            };
        }
       

      });
    setColumns(columns);
    const myItems = dataset.sortedRecordIds.map((id) => {
      debugger;
      const entityIn = dataset.records[id];
      const attributes = dataset.columns.map((column) => {

        if (column.name.includes("description") || column.name.includes("Description")) {
            return {
              [column.name]: <div style={{ whiteSpace: "break-spaces"}}>{entityIn.getFormattedValue(column.name)}</div> ,
            };
        }
        else{
          return {
            [column.name]: <div>{entityIn.getFormattedValue(column.name)}</div> ,
          };
        }
      });


      return Object.assign(
        {
          key: entityIn.getRecordId(),
          raw: entityIn,
        },
        ...attributes
      );
    }).sort((a, b) => (a.parentId < b.parentId ? -1 : a.parentId < b.parentId ? 1 : 0));
    setItems(myItems);
  }, [dataset]);


  return (
    <div style={{width: '100%', display: 'inline' }}>
    <DetailsList
      columns={columns}
      items={items}
      setKey="set"
      styles={{ root: { width: '100%', display: 'inline' } }}
    />
  </div>
  );
});
