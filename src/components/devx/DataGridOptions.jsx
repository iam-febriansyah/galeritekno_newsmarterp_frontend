import { ColumnFixing, Editing, Export, Form, HeaderFilter, LoadPanel, Pager, Paging, Popup, Position, SearchPanel, Selection, Lookup} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import React from 'react';

export function DataGridOptions({fileName}) {
    return [{name: ColumnFixing, enabled: true},
        {name: Export, enabled: true, fileName, allowExportSelectedData: false},
        {name: HeaderFilter, visible:true, allowSearch:true},
        {name: LoadPanel, enabled:true},
        {name: Pager, showPageSizeSelector:true, allowedPageSizes: [5, 10, 20, 50], showInfo:true, visible:true},
        {name: Paging, defaultPageSize:10},
        {name: SearchPanel, visible:true},
        {name: Selection, mode:"single"}
      ].map(({name, ...rest},idx) => React.createElement(name,{...rest, key: idx}))
}

export function DataGridItemEditing({title, onContentReady, width, height, status, remark, itemGroup1, itemGroup2, itemGroup3, itemGroup4}) {
  return React.createElement(Editing,{allowAdding:true, allowDeleting:true, allowUpdating:true, mode:"popup", refreshMode:"full"},
    React.createElement(Popup,{title, showTitle:true, width:width || 700, height: height || 400, onContentReady},
      React.createElement(Position,{of:window},null)),
    React.createElement(Form,{},
      React.createElement(Item,{itemType:"group", caption: itemGroup1?.caption, colCount: itemGroup1?.options?.colCount || 3, colSpan: itemGroup1?.options?.colSpan || 2},
        itemGroup1?.data.map((item, idx) => {
          return !item.dataSource ? 
          React.createElement(Item, typeof item == "object" ? {...item, key:idx} : {dataField: item, key:idx},null) 
          : React.createElement(Item, {dataField: item.dataField, key:idx},
              React.createElement(Lookup,{ dataSource: item.dataSource, valueExpr: item.valueExpr, displayExpr: item.displayExpr },null))}
        )
      ),
      itemGroup2?.data && React.createElement(Item,{itemType:"group", caption: itemGroup2?.caption, colCount: itemGroup2?.options?.colCount || 3, colSpan: itemGroup2?.options?.colSpan || 2},
        itemGroup2?.data.map((item, idx) => {
          return !item.dataSource ? 
          React.createElement(Item, typeof item == "object" ? {...item, key:idx} : {dataField: item, key:idx},null) 
          : React.createElement(Item, {dataField: item.dataField, key:idx},
              React.createElement(Lookup,{ dataSource: item.dataSource, valueExpr: item.valueExpr, displayExpr: item.displayExpr },null))}
        )
      ),
      itemGroup3?.data && React.createElement(Item,{itemType:"group", caption: itemGroup3?.caption, colCount: itemGroup3?.options?.colCount || 3, colSpan: itemGroup3?.options?.colSpan || 2},
        itemGroup3?.data.map((item, idx) => {
          return !item.dataSource ? 
          React.createElement(Item, typeof item == "object" ? {...item, key:idx} : {dataField: item, key:idx},null) 
          : React.createElement(Item, {dataField: item.dataField, key:idx},
              React.createElement(Lookup,{ dataSource: item.dataSource, valueExpr: item.valueExpr, displayExpr: item.displayExpr },null))}
        )
      ),
      itemGroup4?.data && React.createElement(Item,{itemType:"group", caption: itemGroup4?.caption, colCount: itemGroup4?.options?.colCount || 3, colSpan: itemGroup4?.options?.colSpan || 2},
        itemGroup4?.data.map((item, idx) => {
          return !item.dataSource ? 
          React.createElement(Item, typeof item == "object" ? {...item, key:idx} : {dataField: item, key:idx},null) 
          : React.createElement(Item, {dataField: item.dataField, key:idx},
              React.createElement(Lookup,{ dataSource: item.dataSource, valueExpr: item.valueExpr, displayExpr: item.displayExpr },null))}
        )
      ),
      remark !== "none" && React.createElement(Item, {dataField: "Remarks", editorType: "dxTextArea", colSpan: 2, editorOptions: { height: 50 }}),
      status == "last" && React.createElement(Item, {dataField: "Status"})  
    )
  )
}