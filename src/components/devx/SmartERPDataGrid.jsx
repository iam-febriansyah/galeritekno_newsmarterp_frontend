import React, {useEffect} from 'react'
import DataGrid from 'devextreme-react/data-grid';

export default function SmartERPDataGrid({customRefresh, dataSource, id, children, 
    onEditingStart, 
    onInitNewRow, 
    onRowInserting, 
    onRowInserted, 
    onRowUpdating, 
    onRowUpdated, 
    onRowRemoving, 
    onRowRemoved, 
    onSaving, 
    onSaved, 
    onEditCanceling, 
    onEditCanceled,
    onCellPrepared}) {

    const now = new Date();

    let SmartERPGrid = null;
    useEffect(() => {
        let SmartERPToken =  document?.cookie?.split(';')?.filter((a) => a?.includes('SmartERPToken'))[0]?.split('=')[1]

        let dummyCookie =  document.cookie && document.cookie.split('; ')
          .map(item => item.split('='));

        now.setTime(now.getTime() + 15 + 60 * 1000);

        dummyCookie && dummyCookie?.map(item => item
            .filter(item2 => item2 === item[0])[0]).forEach((cookieVar, index) => {
            document.cookie = `${cookieVar}=${dummyCookie[index][1]} ; expires=${now.toUTCString()}`
        });

        // if( SmartERPToken === undefined || SmartERPToken.length < 1 ) {
        //     window.location.href = '/';
        // }

        // if(cookie) {
        //     updateCookie(cookie,15)
        // }
        
        customRefresh?.popupHandler === false && SmartERPGrid?.instance?.refresh() 
    },[customRefresh])

    const refreshDataGrid = () => {
        SmartERPGrid.instance.refresh();
    }
    
    const onToolbarPreparing = (e) => {
        e.toolbarOptions.items.unshift(
            {
                location: 'before',
                text: `${id} List`
            },{
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'refresh',
                    onClick: refreshDataGrid.bind(this)
                }
            }
        );
    }

    const onEditorPreparing = (e) => {
        e.editorOptions.showClearButton = true;
    }

   

    const checkToken = () => {
        let SmartERPToken =  document?.cookie?.split(';')?.filter((a) => a?.includes('SmartERPToken'))[0]?.split('=')[1]
        
        let dummyCookie =  document.cookie && document.cookie.split('; ')
          .map(item => item.split('='));

        now.setTime(now.getTime() + 15 + 60 * 1000);

        dummyCookie && dummyCookie?.map(item => item
            .filter(item2 => item2 === item[0])[0]).forEach((cookieVar, index) => {
            document.cookie = `${cookieVar}=${dummyCookie[index][1]} ; expires=${now.toUTCString()}`
        });

        // if( SmartERPToken === undefined || SmartERPToken.length < 1 ) {
        //     window.location.href = '/';
        // }

        // if(cookie) {
        //     updateCookie(cookie,15)
        // }
    }
      
    return React.createElement(DataGrid, 
        {
            id:`${id}Grid`, 
            title:id, showTitle:true, 
            allowColumnReordering:true, 
            allowColumnResizing:true, 
            cacheEnabled:false, 
            columnAutoWidth:true, 
            dataSource:dataSource, 
            rowAlternationEnabled:true, 
            showBorders:true, 
            showColumnLines:true, 
            wordWrapEnabled:false,
            ref: (ref) => (SmartERPGrid = ref),
            onToolbarPreparing: onToolbarPreparing,
            onEditorPreparing: onEditorPreparing,
            onEditingStart: onEditingStart || checkToken,
            onInitNewRow: onInitNewRow || checkToken,
            onRowInserting: onRowInserting || checkToken,
            onRowInserted: onRowInserted || checkToken,
            onRowUpdating: onRowUpdating || checkToken,
            onRowUpdated: onRowUpdated || checkToken,
            onRowRemoving: onRowRemoving || checkToken,
            onRowRemoved: onRowRemoved || checkToken,
            onSaving: onSaving || checkToken,
            onSaved: onSaved || checkToken,
            onEditCanceling: onEditCanceling || checkToken,
            onEditCanceled: onEditCanceled || checkToken,
            onCellPrepared,
        }, 
            ...children)
}
