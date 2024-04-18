import React, { useState } from 'react';

const ExpandableTable = ({ member }) => {
    const [expandedRows, setExpandedRows] = useState([]);

    const handleRowClick = (id) => {
        const currentExpandedRows = expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(id);

        const newExpandedRows = isRowCurrentlyExpanded ?
            currentExpandedRows.filter(rowId => rowId !== id) :
            currentExpandedRows.concat(id);

        setExpandedRows(newExpandedRows);
    }

    return (
        <section className="expandable-container">
            <div className={`card card-expandable ${expandedRows.includes(member.id) ? 'expanded' : ''}`}>
                <React.Fragment key={member.id}>
                    <button
                        className="btn btn-instagram insta-header button-expandable-div"
                        onClick={() => handleRowClick(member.id)}
                    >
                        <i className="bi bi-file-person"></i>
                    </button>
                    <div className='expandable-div'
                        onClick={() => handleRowClick(member.id)}>
                        {
                            expandedRows.includes(member.id) && (
                                member.details.studies.map(study => (
                                    <p>{study.value}</p>
                                ))
                            )
                        }
                    </div>
                </React.Fragment>
            </div>
        </section>
    );
};

export default ExpandableTable;