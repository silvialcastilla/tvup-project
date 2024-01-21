import React from 'react'

type Data = {
    id: string,
    name: string
}

export default function List( {data = [], onRowClick}: {data: Data[], onRowClick: (a: string) => void} ) {
  return (
      <div style={{ padding: 20 }} >
          {data.map((item, i) => {
              return (
                  <div key={i}
                      style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", padding: 20, border: "1px solid black", margin: 10 }}
                      onClick={() => onRowClick(item.id)}
                  >
                      <div>{item.id}</div>
                      <div>{item.name}</div>
                      
                  </div>
              )
          })}
      </div>
  );
}

   