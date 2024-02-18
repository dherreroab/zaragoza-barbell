import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
            <table className={`card card-expandable ${expandedRows.includes(member.id) ? 'expanded' : ''}`}>
                <tbody>
                    <React.Fragment key={member.id}>
                        <tr className='header-expandable-table' onClick={() => handleRowClick(member.id)}>
                            <td>
                                {expandedRows.includes(member.id) ? <FiChevronUp /> : <FiChevronDown />}
                                {member.name}
                            </td>
                        </tr>
                        <tr className='expandable-row'>
                            <td>
                                {
                                    expandedRows.includes(member.id) && (
                                        member.details.studies.map(study => (
                                            <p>{study.value}</p>
                                        ))
                                    )
                                }
                            </td>
                        </tr>
                    </React.Fragment>
                </tbody>
            </table>
        </section>
    );
};

export default ExpandableTable;