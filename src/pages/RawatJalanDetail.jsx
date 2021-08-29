import React from 'react'
import { useHistory } from 'react-router-dom';

export default function RawatJalanDetail() {
    const history = useHistory();
    return (
        <div>
            <div onClick={() => history.goBack()}>BACk</div>
            { history.location.pathname }
        </div>
    )
}
