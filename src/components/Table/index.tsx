import React from 'react'

type Props = {
  dataSource?: any;
  columns?: any;
  children?: React.ReactNode;
}

const Table = ({dataSource,columns}: Props) => {
  const renderHeader = columns.map((column:any) => {
    return <th key={column.key}>{column.header?column.header(column):column.title}</th>
  })
  const renderBody = dataSource.map((data:any) => {
    const renderCells = columns.map((column:any) => {
      return (<td key={column.key}>{column.render?column.render(data):data[column.dataIndex]}</td>)
    })
    return <tr key={data.id}>{renderCells}</tr>
  })
  return (
    <table>
      <thead>
        <tr>{renderHeader}</tr>
      </thead>
      <tbody>
        {renderBody}
      </tbody>
    </table>
  )
}

export default Table